# Description:
#   Consolidates waffle orders
#
#
# Commands:
#   waffles? - start listening for and consolidating waffle orders
#   <flavour> - when active, typing a flavour adds it to the order
#   <flavour> for <name> - when active, adds someone else's flavour to the order for them
#   cancel - when active, cancels all of your orders
#

waffleTypes = ['plain', 'kaya', 'butter', 'peanut', 'redbean', 'chocolate', 'blueberry', 'cheese']
URL = process.env.HUBOT_SPOT_URL || "http://localhost:5051"

# Send a request to spot
spotRequest = (message, path, action, options, callback) ->
  message.http("#{URL}#{path}")
    .query(options)[action]() (err, res, body) ->
      callback(err,res,body)

module.exports = (robot) ->
  # produces a summary of current orders
  summaries = () ->
    output = 'Orders so far:\n'
    for waffleType in waffleTypes
      nameList = robot.brain.get(waffleType)
      numType = nameList.length
      names = "(#{nameList.join(', ')})"
      output += "#{waffleType}: #{numType} #{names}\n" if numType != 0
    output


  addOrder = (waffleType, name) ->
    nameList = robot.brain.get(waffleType)
    nameList.push(name)
    robot.brain.set(waffleType, nameList)

  deleteOrders = (name) ->
    for waffleType in waffleTypes
      nameList = robot.brain.get(waffleType)
        .filter (order_name) ->
          order_name != name and not order_name.endsWith " via #{name}"
      robot.brain.set waffleType, nameList

  # returns true if the waffles? command was issued within the last 15 minutes
  # false otherwise
  isOrderActive = () ->
    waffleTime = robot.brain.get('waffleTime')
    now = new Date()

    # if it's within 15 minutes
    if (now - 15 * 60 * 1000) < waffleTime
      true
    else
      false

  # listen out for waffles? to start consolidating
  robot.hear /waffles\?/i, (msg) ->
    msg.reply "Consolidating waffle orders...\n" +
      "Available flavours: #{waffleTypes.join(', ')}"
    date = new Date()
    # start a new order by setting the current time and setting the order keys to empty arrays
    # the array will store the list of user names
    robot.brain.set 'waffleTime', date
    robot.brain.set(waffleType, []) for waffleType in waffleTypes
    params = {what: 'Taking waffle orders'}
    spotRequest msg, '/say', 'put', params, (err, res, body) ->
      null

  robot.hear new RegExp("^(#{waffleTypes.join('|')})$", 'i'), (msg) ->
    if isOrderActive()
      waffleType = msg.match[1].toLowerCase()
      addOrder(waffleType, msg.message.user.name)
      msg.reply summaries()

  robot.hear new RegExp("^(#{waffleTypes.join('|')}) for (.*)$", 'i'), (msg) ->
    if isOrderActive()
      waffleType = msg.match[1].toLowerCase()
      recipientName = msg.match[2]
      addOrder(waffleType, "#{recipientName} via #{msg.message.user.name}")
      msg.reply summaries()

  robot.hear /^cancel$/i, (msg) ->
    if isOrderActive()
      deleteOrders(msg.message.user.name)
      msg.reply summaries()

  robot.hear /(summaries|consolidate|orders)/i, (msg) ->
    if isOrderActive()
      msg.reply summaries()

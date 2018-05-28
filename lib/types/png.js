exports.isPNG = function (buffer) {
  var header = buffer.slice(0, 8).toString('hex')
  return (header === '89504e470d0a1a0a') // \211 P N G \r \n \032 'n
}

exports.isAnimated = function (buffer) {
  var hasACTL = false
  var hasIDAT = false
  var hasFDAT = false

  var offset = 8

  while (offset < buffer.length) {
    var chunkLength = buffer.readUInt32BE(offset)
    var chunkType = buffer.slice(offset + 4, offset + 8).toString('ascii')
    if (chunkType == 'acTL') return true;

    offset += 4 + 4 + chunkLength + 4
  }

  return false
}

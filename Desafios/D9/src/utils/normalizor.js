import { normalize, schema, denormalize } from "normalizr";
import util from "util";

function normalizeMessages(messages) {
  const authorSchema = _getAuthorSchema(messages)
  const textSchema = _getTextSchema(authorSchema)
  const messageSchema = _getMessageSchema(authorSchema,textSchema)

  const normalizedData = normalize(messages, [messageSchema]);

  const longObjectData = JSON.stringify(messages).length
  // console.log('Longitud objeto original: ', longObjectData)

  const longNormalizedData = JSON.stringify(normalizedData).length
  // console.log('Longitud objeto normalizado: ', longNormalizedData)

  const compressionPercentage = 100.0 - ((longNormalizedData * 100) / longObjectData)
  // console.log('Porcentaje de compresión: ', compressionPercentage.toFixed(2) + '%')

  return normalizedData;
}

function denormalizr() {
  const authorSchema = _getAuthorSchema()
  const textSchema = _getTextSchema()
  const messageSchema = _getMessageSchema(authorSchema,textSchema)
  
  return {
    authorSchema : authorSchema,
    textSchema: textSchema,
    messageSchema : messageSchema,
    denormalize: denormalize()
  }
}

export { normalizeMessages, denormalizr };


function _print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}


function _getAuthorSchema(messages){
  return new schema.Entity(
    "author",
    {
      userEmail: messages.userEmail,
      userName: messages.userName,
      userLastName: messages.userLastName,
      userAge: messages.userAge,
      userAlias: messages.userAlias,
      userAvatar: messages.userAvatar,
    },
    { idAttribute: "userEmail" }
  );
}

function _getTextSchema(authorSchema){
  return new schema.Entity("text", { author: authorSchema });
}

function _getMessageSchema(authorSchema,textSchema){
  return new schema.Entity("messages", {
    author: authorSchema,
    texts: [textSchema],
  });
}
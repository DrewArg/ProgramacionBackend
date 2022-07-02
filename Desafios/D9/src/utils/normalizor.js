import { normalize, schema, denormalize } from "normalizr";

console.log("acaaa");

function normalizeMessages(messages) {
  const authorSchema = _getAuthorSchema(messages)
  const textSchema = _getTextSchema(authorSchema)
  const messageSchema = _getMessageSchema(authorSchema,textSchema)
  const normalizedData = normalize(messages, [messageSchema]);
  const longObjectData = JSON.stringify(messages).length
  const longNormalizedData = JSON.stringify(normalizedData).length

  const compressionPercentage = 100.0 - ((longNormalizedData * 100) / longObjectData)
  // console.log('Porcentaje de compresión: ', compressionPercentage.toFixed(2) + '%')

  return normalizedData;
}

function denormalizeMessages(messages) {
  const authorSchema = _getAuthorSchema()
  const textSchema = _getTextSchema()
  const messageSchema = _getMessageSchema(authorSchema,textSchema)
  const denormalizedData = denormalize(messages, [messageSchema]);
  return denormalizedData
}

export { normalizeMessages, denormalizeMessages };

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
import { normalize, schema } from "normalizr";
import util from "util";

function normalizeMessages(messages) {
  console.log("Entrando --> " + JSON.stringify(messages).length);
  console.log(messages);
  const authorSchema = new schema.Entity(
    "author",
    {},
    { idAttribute: "userEmail" }
  );
  const textSchema = new schema.Entity("text");
  const messageSchema = new schema.Entity("messages", {
    author: authorSchema,
    texts: [textSchema],
  });

  const normalizedData = normalize(messages, [messageSchema]);
  console.log("Saliendo --> " + JSON.stringify(normalizedData).length);
  console.log(util.inspect(normalizedData, false, 3, true));
}

export default normalizeMessages;

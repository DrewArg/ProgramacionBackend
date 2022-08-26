import twilio from "twilio";
import { twilioWhatsapp, twilioWhatsappAdmin, twilioAccountSid, twilioAuthToken } from "../../config/config.js";
import { winston } from "../../controllers/loggerControllers.js";

export const whatsappSender = async (user, text) => {
    const whatsapp = {
        from: `whatsapp:${twilioWhatsapp}`,
        // to: `whatsapp:+${user.phoneNumber}`,
        to: `whatsapp:${twilioWhatsappAdmin}`,
        body: text
    }
    const twilioClient = twilio(twilioAccountSid, twilioAuthToken)


    try {
        const msg = await twilioClient.messages.create(whatsapp)
    } catch (error) {
        winston.log('error', `Whatsapp sender --> ${error}`)

    }
}
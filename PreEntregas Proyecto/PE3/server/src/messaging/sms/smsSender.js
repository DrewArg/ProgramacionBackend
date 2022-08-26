import twilio from "twilio";
import { twilioSmsPhoneNumber, twilioAccountSid, twilioAuthToken } from "../../config/config.js";

export const smsSender = async (user, text) => {
    const smsMessage = {
        from: twilioSmsPhoneNumber,
        to: `+${user.phoneNumber}`,
        body: text
    }
    const twilioClient = twilio(twilioAccountSid, twilioAuthToken)

    try {
        await twilioClient.messages.create(smsMessage)
    } catch (error) {
        `Sms sender --> ${error}`
    }
}
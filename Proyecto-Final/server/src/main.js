import httpServer from './server.js'
import { PORT } from './config/config.js'

const connectedServer = httpServer.listen(process.env.PORT || PORT, () => {
    console.log(`Http server listening to port ${connectedServer.address().port}`);
})

connectedServer.on("error", (e) => {
    console.log(`Server error: ${e}`);
})
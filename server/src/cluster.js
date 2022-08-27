import cluster from 'cluster'
import os from 'os'

const numCpus = os.cpus().length

const masterProcess = () => {
    console.log(`main PID ${process.pid} is running`);

    for (let i = 0; i < numCpus; i++) {
        cluster.fork()
    }
}

const childProcess = () => {
    console.log(`Worker ${process.pid} running`);
}

export const connectCluster = () => {
    if (cluster.isPrimary) {
        masterProcess()
    } else {
        childProcess()

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`);
            cluster.fork()
        })
    }
}
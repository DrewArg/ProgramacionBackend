import cluster from 'cluster'
import os from 'os'

const numCpus = os.cpus().length

function masterProcess() {
    console.log(`Main PID ${process.pid} is runnning`);

    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    // process.exit();
}

function childProcess() {
    console.log(`Worker ${process.pid} running`);

    // process.exit();
}

export const connectCluster = () => {
    if (cluster.isPrimary) {
        masterProcess();
    } else {
        childProcess();
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`)
            cluster.fork()
        })
    }
}


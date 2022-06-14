coderhouse> show databases
admin   148.00 KiB
config   92.00 KiB
local    72.00 KiB

root@52026f5685c6:/# mongosh -u root -p
Enter password: *************
Current Mongosh Log ID:	62a7dea6b93600b93375349a
Connecting to:		mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0
Using MongoDB:		5.0.9
Using Mongosh:		1.5.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2022-06-14T00:26:06.722+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).
   
   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.
   
   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

test> show databases
admin   148.00 KiB
config   92.00 KiB
local    72.00 KiB

test> use admin
switched to db admin

test> use coderhouse
switched to db coderhouse

coderhouse> show databases
admin   148.00 KiB
config  108.00 KiB
local    72.00 KiB

already on db coderhouse

coderhouse> db.messages.insertOne({userEmail: "andy@dev",msgContent:"Hola mundo",timestamp:new Timestamp()})
{
  acknowledged: true,
  insertedId: ObjectId("62a7e04096b24d65e595d018")
}

coderhouse> db.messages.find()
[
  {
    _id: ObjectId("62a7e04096b24d65e595d018"),
    userEmail: 'andy@dev',
    msgContent: 'Hola mundo',
    timestamp: Timestamp({ t: 1655169088, i: 1 })
  }
]
coderhouse>  db.messages.insertMany([{userEmail:"eze@coder",msgContent:"Hola!!",coderhouse>  db.messages.insertMany([{userEmail:"eze@coder",msgContent:"Hola!!",coderhouse>  db.messages.insertMany([{userEmail:"eze@coder",msgContent:"Hola!!",coderhouse>  db.messages.insertMany([{userEmail:"eze@coder",msgContent:"Hola!!",timestamp: new Timestamp()},{userEmail:"eze@coder",msgContent:"Hola!!",timestamp: new Timestamp()},{userEmail:"meri@gmail",msgContent:"Como va?",timestamp: new Timestamp()},{userEmail:"chris@coder",msgContent:"Todo bieeen",timestamp: new Timestamp()},{userEmail:"marian@coder",msgContent:"Hagan los desafíos!!",timestamp: new Timestamp()},{userEmail:"andy@dev",msgContent:"Ando algo atrasado...",timestamp: new Timestamp()},{userEmail:"andy@dev",msgContent:"En breve me pongo al día igual...",timestamp: new Timestamp()},{userEmail:"eze@coder",msgContent:"Vamoooo!",timestamp: new Timestamp()},{userEmail:"eze@coder",msgContent:"Vos podessss",timestamp: new Timestamp()}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("62a7e39e96b24d65e595d019"),
    '1': ObjectId("62a7e39e96b24d65e595d01a"),
    '2': ObjectId("62a7e39e96b24d65e595d01b"),
    '3': ObjectId("62a7e39e96b24d65e595d01c"),
    '4': ObjectId("62a7e39e96b24d65e595d01d"),
    '5': ObjectId("62a7e39e96b24d65e595d01e"),
    '6': ObjectId("62a7e39e96b24d65e595d01f"),
    '7': ObjectId("62a7e39e96b24d65e595d020"),
    '8': ObjectId("62a7e39e96b24d65e595d021")
  }
}

coderhouse> db.messages.find()
[
  {
    _id: ObjectId("62a7e04096b24d65e595d018"),
    userEmail: 'andy@dev',
    msgContent: 'Hola mundo',
    timestamp: Timestamp({ t: 1655169088, i: 1 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d019"),
    userEmail: 'eze@coder',
    msgContent: 'Hola!!',
    timestamp: Timestamp({ t: 1655169950, i: 1 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d01a"),
    userEmail: 'eze@coder',
    msgContent: 'Hola!!',
    timestamp: Timestamp({ t: 1655169950, i: 2 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d01b"),
    userEmail: 'meri@gmail',
    msgContent: 'Como va?',
    timestamp: Timestamp({ t: 1655169950, i: 3 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d01c"),
    userEmail: 'chris@coder',
    msgContent: 'Todo bieeen',
    timestamp: Timestamp({ t: 1655169950, i: 4 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d01d"),
    userEmail: 'marian@coder',
    msgContent: 'Hagan los desafíos!!',
    timestamp: Timestamp({ t: 1655169950, i: 5 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d01e"),
    userEmail: 'andy@dev',
    msgContent: 'Ando algo atrasado...',
    timestamp: Timestamp({ t: 1655169950, i: 6 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d01f"),
    userEmail: 'andy@dev',
    msgContent: 'En breve me pongo al día igual...',
    timestamp: Timestamp({ t: 1655169950, i: 7 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d020"),
    userEmail: 'eze@coder',
    msgContent: 'Vamoooo!',
    timestamp: Timestamp({ t: 1655169950, i: 8 })
  },
  {
    _id: ObjectId("62a7e39e96b24d65e595d021"),
    userEmail: 'eze@coder',
    msgContent: 'Vos podessss',
    timestamp: Timestamp({ t: 1655169950, i: 9 })
  }
]



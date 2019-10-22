const firebase = require('firebase/app');
const yesno = require('yesno');
require('firebase/firestore');

if (!process.env.REACT_APP_PROJECT_ID) {
  throw new Error(
    'REACT_APP_PROJECT_ID is missing. Have you added it to your .env?'
  );
}

firebase.initializeApp({
  projectId: process.env.REACT_APP_PROJECT_ID,
});

const db = firebase.firestore();

async function seedData(path, data) {
  const doc = await db.doc(path).get();
  const isAlreadySeeded = doc.exists;
  let canSeed = !isAlreadySeeded;

  if (isAlreadySeeded) {
    canSeed = await yesno({
      question: `This will overwrite the current documents at "${path}" in your FireStore "${process.env.REACT_APP_PROJECT_ID}".
Are you sure you want to continue? (yes/NO)`,
      defaultValue: false,
    });
  }

  if (!canSeed) {
    process.exit();
  }

  console.log('Importing documents...');

  db.doc(path)
    .set(data)
    .then(() => console.log('Successfully imported documents.'))
    .catch(error => console.error('Failed to import documents:', error));

  db.waitForPendingWrites()
    .then(() => db.terminate())
    .catch(console.error);
}

seedData('test/testData', {
  appName: 'Poll App with React and Firebase',
  contributors: ['Zsolt Meszaros', 'Santhosh Balaguru'],
  isFinished: false,
  techStack: ['React.js', 'Firebase', 'Jest'],
});

const DefaultTutorial = require('./models/DefaultTutorial');

(async () => {
  try {
    const count = await DefaultTutorial.countDocuments();
    if (count === 0) {
      const data = [
        {
          title: 'Database Fundamentals',
          description: 'Learn how data is stored and retrieved.',
          videoUrl: 'https://www.youtube.com/watch?v=YRnjGeQbsHQ',
          tags: ['DBMS']
        },
        {
          title: 'DevOps Fundamentals',
          description: 'Understand DevOps lifecycle and tools.',
          videoUrl: 'https://www.youtube.com/watch?v=9-psq7Uwa3Q',
          tags: ['DevOps']
        },
        {
          title: 'Backend Fundamentals',
          description: 'Learn server-side development with JS.',
          videoUrl: 'https://www.youtube.com/watch?v=T55Kb8rrH1g',
          tags: ['Backend']
        }
      ];

      await DefaultTutorial.insertMany(data);
      console.log('✅ Default tutorials added!');
    } else {
      console.log('📦 Default tutorials already exist.');
    }
  } catch (err) {
    console.error('❌ Error in seedDefaultTutorials:', err);
  }
})();
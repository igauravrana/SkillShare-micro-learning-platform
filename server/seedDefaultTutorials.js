const mongoose = require('mongoose');
const DefaultTutorial = require('./models/DefaultTutorial');

mongoose.connect('mongodb://127.0.0.1:27017/skillshare')
  .then(() => {
    console.log('Connected');

    const data = [
      {
        title: 'Database Fundamentals',
        description: 'Are you ready to unlock the power of data? This comprehensive Database course is designed for beginners to aspiring developers who want to build a strong foundation in how data is stored, managed, and retrieved.',
        videoUrl: 'https://www.youtube.com/watch?v=YRnjGeQbsHQ&list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV',
        tags: ['DBMS']
      },
      {
        title: 'Devops Fundamentals',
        description: 'Are you ready to kickstart your journey to becoming a DevOps Engineer in 2025? 🚀 This video is your ultimate guide to understanding DevOps, covering: What is DevOps? How to grow your career as a DevOps Engineer?',
        videoUrl: 'https://www.youtube.com/watch?v=9-psq7Uwa3Q&list=PL5OhSdfH4uDsyUM02ZHl2mOYBpihCYsml',
        tags: ['Devops']
      },
      {
        title: 'Backend Fundamentals',
        description: 'Kickstart your backend development journey by mastering essential JavaScript concepts! 🚀 In this first part, we’ll cover the fundamentals you need to build powerful backend applications.',
        videoUrl: 'https://www.youtube.com/watch?v=T55Kb8rrH1g&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH',
        tags: ['JS backend']
      }
    ];

    return DefaultTutorial.insertMany(data);
  })
  .then(() => {
    console.log('Default tutorials added');
    mongoose.disconnect();
  })
  .catch(console.error);

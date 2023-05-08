'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Therapists', [
      {
        id: 1,
        name: "Dr. Jane Smith",
        specialties: "Depression",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Dr. Michael Lee",
        specialties: "Anxiety",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Dr. Karen Johnson",
        specialties: "Relationship Issues",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Dr. Sarah Patel",
        specialties: "Eating Disorders",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Dr. Robert Garcia",
        specialties: "Addiction",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Dr. Amanda Jones",
        specialties: "Trauma",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Dr. Eric Kim",
        specialties: "Obsessive-Compulsive Disorder (OCD)",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Dr. Samantha Chen",
        specialties: "Attention Deficit Hyperactivity Disorder (ADHD)",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Dr. William Davis",
        specialties: "Bipolar Disorder",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Dr. Laura Robinson",
        specialties: "Child and Adolescent Therapy",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 11,
        name: "Dr. Daniel Hernandez",
        specialties: "Post-Traumatic Stress Disorder (PTSD)",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 12,
        name: "Dr. Rachel Nguyen",
        specialties: "Grief and Loss",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 13,
        name: "Dr. John Kim",
        specialties: "Anger Management",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 14,
        name: "Dr. Elizabeth Martinez",
        specialties: "Sleep Disorders",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 15,
        name: "Dr. Kevin Lee",
        specialties: "Phobias",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 16,
        name: "Dr. Anna Brown",
        specialties: "Borderline Personality Disorder (BPD)",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 17,
        name: "Dr. Timothy Green",
        specialties: "Gender Identity",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 18,
        name: "Dr. Maria Rodriguez",
        specialties: "Self-Esteem and Confidence",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 19,
        name: "Dr. Christopher Chen",
        specialties: "Couples Therapy",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 20,
        name: "Dr. Emily Taylor",
        specialties: "Career Counseling", 
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 21,
        name: "Dr. Matthew Adams",
        specialties: "Social Anxiety",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 22,
        name: "Dr. Jasmine Kim",
        specialties: "Body Image Issues",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 23,
        name: "Dr. Stephen Park",
        specialties: "Panic Attacks",
        imgUrl: "https://placeimg.com/400/300/any",
        isAvailable: true,
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Therapists', null, {});
  },
};

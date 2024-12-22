// import TerorEvent from "../models/terorEvetModel";
// import data from "../../../server"
// import data from ''


export const seedTerorEvents = async () => {
    console.log("innnn")
    try {
    
    //   for (const event of events) {
    //     const newEvent = new TerorEvent(event);
    //     await newEvent.save();
    //   }
      console.log("event seeded successfully");
    } catch (error) {
      console.error("Error seeding events:", error);
    }
};
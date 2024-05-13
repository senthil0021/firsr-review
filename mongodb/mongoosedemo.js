const mongoose = require("mongoose");

const schema = mongoose.Schema;

const skillSchema = new schema({
  skillName: String,
  experience: Number,
  proficiency: String,
});

const jobSeekerSchema = new schema({
  jobSeekerName: String,
  emailId: String,
  age: Number,
  certified: Boolean,
  skills: [skillSchema],
});

const js = mongoose.model("jobSeeker", jobSeekerSchema);
mongoose.connect("mongodb://127.0.0.1:27017/aspire");

const jobSeeker1 = new js({
  jobSeekerName: "raj",
  age: 27,
  emailId: "raj@gmail.com",
  certified: true,
  skills: [
    { skillName: "python", experience: 4, proficiency: "intermediate" },
    { skillName: "java", experience: 5, proficiency: "intermediate" }]
});

jobSeeker1.save();

async function mongooconnect()
{
  const result = await js.aggregate([
    /*{ $match: { "skills.experience": { $lte: 2 } } },
    
    {
      $project: {
        jobSeekerName: 1,
        emailId: 1,
      
        certified: 1,
        skills: {
          $filter: {
            input: "$skills",
            cond: { $lte: ["$$this.experience", 2] },
          },
        },
      },
    },
    {
      $set: {
        phone: 9876543210
      }
    }*/
    {
      $bucketAuto: {
        groupBy: "$age",
        buckets: 4,
        output: {
          "numJobSeekers": { $sum: 1 },
          "jobSeekers": { $push: "$$ROOT" },
        },
        granularity: "R10", 
      },
    }
  ]);

  result.forEach((record) => console.log(record));
}


mongooconnect();


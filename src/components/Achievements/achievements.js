import React from "react";
import "./achievements.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

const achievementsData = [
  {
    date: "December 2021 - January 2022",
    title: "Course Completed",
    description: "Joy of Programming Course by Monschool. Guidance under TinkerhubKMEA."
  },
  {
    date: "January 2022 - February 2022",
    title: "Mentor",
    description: "Mentorship provided to students doing Joy of Programming Course by Monschool, Under TinkerhubKMEA."
  },
  {
    date: "5th March 2022",
    title: "Python Mentor",
    description: "Python Mentor in the learning station conducted by TinkerHub Foundation, IEDC Summit 2022, at St Josephs College of Engineering & Technology, Palai."
  },
  {
    date: "1st July 2022",
    title: "Python workshop",
    description: "Participated in 2- days python workshop, conducted by TinkerhubKMEA."
  },
  {
    date: "17th September 2022",
    title: "Python-Django Internship",
    description: "Done a 30 hrs Internship in Python With Django Framework, Held at KMEA Engineering College, Done by AESTER INDIA [P] LTD."
  },
  {
    date: "25th October - 12th November 2022",
    title: "Computer Hardware And Networking",
    description: "Done a 50 hrs Internship course conducted during extra sessions after regular academic hours, from LBS institute of Technology For Women."
  },
  {
    date: "20th November 2022",
    title: "Volunteer",
    description: "Volunteer for `Digital Skills Project`, Conducted by TinkerHub on CITIC CUSAT."
  },
  {
    date: "29th November 2022",
    title: "Git/Github",
    description: "Taken an evening session on Git/Github in ccf lab , conducted by TinkerhubKMEA."
  },
  {
    date: "2021 - 2023",
    title: "Execom Member",
    description: "Execom member at Tech Team TinkerhubKMEA."
  },
  {
    date: "2022 - 2023",
    title: "Startup Founder - TZET IT SOLUTIONS PVT LTD",
    description: "Started a service based startup with 9 members, Incubated at KMEA Engineering College."
  },
  {
    date: "28th April 2023",
    title: "Website Developer (Hack23)",
    description: "Developed a website for Hack23, 24 hrs hackathon, conducted by the CS Department as part of Kapricious23."
  },
  {
    date: "28th April 2023",
    title: "Volunteer",
    description: "Volunteer for `coding challenge`, conducted by the CS Department as part of Kapricious23."
  },
  {
    date: "May 2023 - June 2023",
    title: "Mentor",
    description: "Mentorship provided to students doing Joy of Programming Course by Monschool, under TinkerhubKMEA."
  },
  {
    date: "19th August 2023 - 20th August 2023",
    title: "Hackathon Participation",
    description: "GTA | CodeStorm - An offline hackathon conducted by Gtech Mulearn."
  },
  {
    date: "22nd September 2023 - 24th September 2023",
    title: "Summit Participation",
    description: "Represented KMEA Engineering College as a Tech Lead, at TinkerHub Campus Summit held at Mar Baselios Christian College of Engineering and Technology, Idukki."
  },
  {
    date: "22nd October 2023",
    title: "Course Completion - Udemy",
    description: "Completed “Build a Backend REST API with python & Django - Advanced”, 23 hrs course."
  },
  {
    date: "28th October 2023 - 30th October 2023",
    title: "Participated in India FOSS 3.0",
    description: "Shortlisted for FOSS FORCE Program conducted by TinkerHub. Attended India FOSS 3.0 hosted on Bangalore, Karnataka."
  },
  {
    date: "17th November 2023",
    title: "Top 100 Coders",
    description: "Shortlisted as #2 and selected for Top100Coders by Gtech Mulearn, event held at Huddle Global 2023."
  },
  {
    date: "June 2023 - February 2024",
    title: "Employer (Django developer)",
    description: "Employed at TZETIT Solutions PVT LTD as Django Developer, company incubated at KMEA Engineering College."
  },
  {
    date: "2023 - 2024",
    title: "TechLead TinkerHubKMEA",
    description: "Tech Lead at TinkerHub KMEA during the academic year 2023-2024."
  },
  {
    date: "February 2024",
    title: "Website Developer (ICTACME)",
    description: "Developed a website for an International Conference on Technological Advancements in Civil and Mechanical Engineering, held at KMEA Engineering College."
  },
  {
    date: "2nd March 2024 - 3rd March 2024",
    title: "Organizer - Hackathon",
    description: "Venue Organizer at Tink-Her-Hack 2.0, conducted by TinkerHub, at KMEA Engineering College."
  },
  {
    date: "17th January 2025 - 19th January 2025",
    title: "Technical Support",
    description: "Technical support for the FDP on “IT WORKSHOP”, held at KMEA Engineering College."
  },
  {
    date: "13th February 2025",
    title: "Organizer (Worst Code challenge)",
    description: "Organized a coding challenge, conducted by the CS Department as part of Kapricious25"
  },
  {
    date: "1th April 2025",
    title: "Programmer Analyst",
    description: <>Joined as a Programmer Analyst at <strong>Systalent</strong></>
  },
  {
    date: "27th June 2025",
    title: "Graduated",
    description: "Graduated from KMEA Engineering College with a degree in Computer Science and Engineering",
    color: "#007bff"
  }
];

const Achievements = () => {
  return (
    <section>
      <h2 className="achievementsTitle">Achievements</h2>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Timeline position="alternate">
          {achievementsData.map((achievement, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0", color: "white" }}
                variant="body2"
                color="text.secondary"
              >
                {achievement.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ color: '#007bff' }}
                >
                  {achievement.title}
                </Typography>
                <Typography sx={{ color: 'white' }}>
                  {achievement.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Achievements;

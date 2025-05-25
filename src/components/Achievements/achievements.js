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

const Achievements = () => {
  return (
    <section>
      <h2 className="achievementsTitle">Achievements</h2>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              December 2021 - January 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Course Completed
              </Typography>
              <Typography>
                Joy of Programming Course by Monschool. Guidance under
                TinkerhubKMEA.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              January 2022 - February 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Mentor
              </Typography>
              <Typography>
                Mentorship provided to students doing Joy of Programming Course
                by Monschool, Under TinkerhubKMEA.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              5th March 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Python Mentor
              </Typography>
              <Typography>
                Python Mentor in the learning station conducted by TinkerHub
                Foundation, IEDC Summit 2022, at St Josephs College of
                Engineering & Technology, Palai.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              1st July 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Python workshop
              </Typography>
              <Typography>
                Participated in 2- days python workshop, conducted by
                TinkerhubKMEA.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              17th September 2022{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Python-Django Internship
              </Typography>
              <Typography>
                Done a 30 hrs Internship in Python With Django Framework, Held
                at KMEA Engineering College, Done by AESTER INDIA [P] LTD.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              25th October - 12th November 2022{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Computer Hardware And Networking
              </Typography>
              <Typography>
                Done a 50 hrs Internship course conducted during extra sessions
                after regular academic hours, from LBS institute of Technology
                For Women.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              20th November 2022{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Volunteer
              </Typography>
              <Typography>
                Volunteer for `Digital Skills Project`, Conducted by TinkerHub
                on CITIC CUSAT.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              29th November 2022{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Git/Github
              </Typography>
              <Typography>
                Taken an evening session on Git/Github in ccf lab , conducted by
                TinkerhubKMEA.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              2021 - 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Execom Member
              </Typography>
              <Typography>Execom member at Tech Team TinkerhubKMEA.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              2022 - 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Startup Founder - TZET IT SOLUTIONS PVT LTD
              </Typography>
              <Typography>
                Started a service based startup with 9 members, Incubated at
                KMEA Engineering College.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              28th April 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Website Developer (Hack23)
              </Typography>
              <Typography>
                Developed a website for Hack23, 24 hrs hackathon, conducted by
                the CS Department as part of Kapricious23.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              28th April 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Volunteer{" "}
              </Typography>
              <Typography>
                Volunteer for `coding challenge`, conducted by the CS Department
                as part of Kapricious23.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              May 2023 - June 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Mentor
              </Typography>
              <Typography>
                Mentorship provided to students doing Joy of Programming Course
                by Monschool, under TinkerhubKMEA.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              19th August 2023 - 20th August 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Hackathon Participation{" "}
              </Typography>
              <Typography>
                GTA | CodeStorm - An offline hackathon conducted by Gtech
                Mulearn.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              22nd September 2023 - 24th September 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Summit Participation
              </Typography>
              <Typography>
                Represented KMEA Engineering College as a Tech Lead, at
                TinkerHub Campus Summit held at Mar Baselios Christian College
                of Engineering and Technology, Idukki.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              22nd October 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Course Completion - Udemy{" "}
              </Typography>
              <Typography>
                Completed “Build a Backend REST API with python & Django -
                Advanced”, 23 hrs course.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              28th October 2023 - 30th October 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Participated in India FOSS 3.0{" "}
              </Typography>
              <Typography>
                Shortlisted for FOSS FORCE Program conducted by TinkerHub.
                Attended India FOSS 3.0 hosted on Bangalore, Karnataka.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              17th November 2023{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Top 100 Coders{" "}
              </Typography>
              <Typography>
                Shortlisted as #2 and selected for Top100Coders by Gtech
                Mulearn, event held at Huddle Global 2023.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              June 2023 - February 2024{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Employer (Django developer){" "}
              </Typography>
              <Typography>
                Employed at TZETIT Solutions PVT LTD as Django Developer,
                company incubated at KMEA Engineering College.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              2023 - 2024{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                TechLead TinkerHubKMEA{" "}
              </Typography>
              <Typography>
                Tech Lead at TinkerHub KMEA during the academic year 2023-2024.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              February 2024{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Website Developer (ICTACME){" "}
              </Typography>
              <Typography>
                Developed a website for an International Conference on
                Technological Advancements in Civil and Mechanical Engineering,
                held at KMEA Engineering College.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              2nd March 2024 - 3rd March 2024{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Organizer - Hackathon
              </Typography>
              <Typography>
                Venue Organizer at Tink-Her-Hack 2.0, conducted by TinkerHub, at
                KMEA Engineering College.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              17th January 2025 - 19th January 2025{" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Technical Support{" "}
              </Typography>
              <Typography>
                Technical support for the FDP on “IT WORKSHOP”, held at KMEA
                Engineering College.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              13th February 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Organizer (Worst Code challenge)
              </Typography>
              <Typography>
                Organized a coding challenge, conducted by the CS Department as
                part of Kapricious25
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default Achievements;

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";

const Achievements = () => {
  return (
    <div style={{ marginTop: "200px", marginBottom: "200px" }}>
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
              Mentorship provided to students doing Joy of Programming Course by
              Monschool, Under TinkerhubKMEA.
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
              Foundation, IEDC Summit 2022, at St Josephs College of Engineering
              & Technology, Palai.
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
              Done a 30 hrs Internship in Python With Django Framework, Held at
              KMEA Engineering College, Done by AESTER INDIA [P] LTD.
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
              after regular academic hours, from LBS institute of Technology For
              Women.
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
              Volunteer for `Digital Skills Project`, Conducted by TinkerHub on
              CITIC CUSAT.
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
              Started a service based startup with 9 members, Incubated at KMEA
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
              Developed a website for Hack23, 24 hrs hackathon, conducted by the
              CS Department as part of Kapricious23.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Achievements;

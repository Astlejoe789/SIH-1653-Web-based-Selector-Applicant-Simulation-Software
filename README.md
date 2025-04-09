# Smart India Hackathon Workshop
# Date: 09/04/2024
## Register Number: 212224240019
## Name: ASTLE JOE A S
## Problem Title
SIH 1653: Web based Selector-Applicant Simulation Software
## Problem Description
Background: Recruitment and Assessment Centre (RAC) under DRDO, Ministry of Defence carries out interviews for applications received against advertised vacancies and for promotion to next higher grade for scientific manpower inducted within DRDO. Description: The process of interviewing is a challenging task. An unbiased objective interviewing process helps identify the right talent. The basic process of an interview involves posing a set of questions by an interviewer and thereafter evaluating responses from candidates. Thus, the questions asked should be relevant and match the area/ expertise of the applicant and the responses should also be of relevance w.r.t. the question asked. Expected Solution: The proposed solution should provide experts as well as candidates a real life Board Room experience, starting with initial ice-breaking questions leading to in-depth techno-managerial (depending on the level of candidate) questions. It shall also be able to provide a quantifiable score for experts as well as the candidate for the relevancy of questions w.r.t. the area/ expertise of the applicant. Similarly, candidate responses should also be graded for relevancy w.r.t. the question asked, finally assisting in arriving at an overall score for the subject knowledge of the candidate and thus his/ her suitability against the advertised post.

## Problem Creater's Organization
### Ministry of Defence

## Idea
1. For this the best Solution is we can simply create a website

2. Create a seperate login for the candidate and the interviewer ,for the interviewer login id give access for asking question to the candidate

3. In candidate login page give access only to answer the question

4. set up the key answer for the answer question make the website to evaluate the answer

5. We can select the best candidate by this Procedure


## Proposed Solution Architecture Diagram

We propose a Web-Based Interview Simulation Platform consisting of the following main modules:

Login System

Separate login for Interviewer (HR) and Candidate.

Role-based access control.

Interview Management

HR can create, edit, and ask questions.

Candidates can view and answer questions.

Answer Evaluation

Candidate responses are auto-evaluated based on keyword matching or model answers.

Marks are assigned dynamically.

Scoring System

System calculates the total score for each candidate based on their response relevance.

Result Dashboard

HR can view individual scores and overall performance reports.

Boardroom Simulation

Web design provides a real-life formal interview experience.

## Architecture Diagram

![ChatGPT Image Apr 9, 2025, 09_11_36 PM](https://github.com/user-attachments/assets/3f2747b3-95f2-4d44-bde6-489251379975)


## Use Cases

Login System: Candidate and HR login separately and get access to their dashboards.

Question-Answer Flow: HR asks questions, Candidate answers, system evaluates automatically.

Result & Scoring: System calculates scores based on relevancy and displays results to HR and Candidate.

## Technology Stack

Frontend: HTML5, CSS3, JavaScript for building the web interface.

Backend: Node.js and Express.js to manage interviews and evaluations.

Database: MongoDB or Firebase to store candidate answers and scores.

Tools: VS Code for development, GitHub for version control and project hosting.

## Dependencies

Node.js and Express.js for server and API handling.

MongoDB or Firebase for storing candidate data and results.

bcrypt.js for securing login passwords, body-parser for request parsing.

Bootstrap or Tailwind CSS for responsive and attractive UI design.

import React from "react";
import styles from "./Resources.module.css";

class Resources extends React.Component {
  render() {
    return (
      <>
        <div className={styles.center}>
          <h1>Help Resources</h1>
          <br />
          <h3>Skills you must Learn</h3>
          <ul>
            <li>
              <p>
                {" "}
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.interviewbit.com/blog/web-developer-skills/"
                >
                  Web Developers skills you must have
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://medium.com/javarevisited/11-essential-skills-to-become-software-developer-in-2020-c617e293e90e"
                >
                  11 Essential Skills to become Software Developer in 2022
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.simplilearn.com/what-skills-do-i-need-to-become-a-data-scientist-article"
                >
                  Top 6 Data Scientist Skills You Need in 2022
                </a>
              </p>
            </li>
          </ul>
          <br />
          <h3>How to increase your productivity</h3>
          <ul>
            <li>
              <p><a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href = "https://www.forbes.com/sites/ashleystahl/2018/06/28/5-ways-to-increase-your-productivity-at-work/?sh=5f1193822138"
                  >5 ways to increase your productivity at Work. </a></p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://blocksite.co/productivity/"
                >
                  22 Amazing tips to increase productivity at work - Blocksite
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.nytimes.com/guides/business/how-to-improve-your-productivity-at-work"
                >
                  How to make the cost of your Workday - The New York Times
                </a>
              </p>
            </li>
          </ul>
          <br />
          <h3>How to improve time management</h3>
          <ul>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://novoresume.com/career-blog/improve-time-management-skills"
                >
                    How to improve your time management skills (7 Easy Ways)
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.indeed.com/career-advice/career-development/improve-time-management-skills"
                >
                    10 Ways to boost your time management skills
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.lifehack.org/articles/productivity/10-ways-improve-your-time-management-skills.html"
                >
                    10 Practical Ways to improve time management Skills - Lifehack
                </a>
              </p>
            </li>
            
          </ul>
          <br />
          <h3>How to make a healthy work environment</h3>
          <ul>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.achievers.com/blog/healthy-work-environment/"
                >
                    7 Great Ways to create a healthy work environment - Achievers
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.penguins.co.uk/incentive-travel-blog/six-tips-for-creating-a-healthy-workplace-environment"
                >
                    Six tips for creating a healthy workplace environment
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.glassdoor.com/employers/blog/create-healthy-work-environment/"
                >
                   8 Steps to create a healthy and positive Work environment
                </a>
              </p>
            </li>
            
          </ul>
          <br />
          <h3>Personality Development Skills</h3>
          <ul>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://ritusingal.com/8-personality-development-skills-you-must-possess/"
                >
                    8 Personality Development skills you must possess
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.educba.com/25-self-development-skills-to-learn/"
                >
                    28 Self Development skills to Build Strong Personality - eduCBA
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  style={{
                    color: "blue",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                  href="https://www.indeed.com/career-advice/career-development/improve-your-personal-development-skills"
                >
                   9 Ways to improve your personality Development Skills - Indeed
                </a>
              </p>
            </li>
            
          </ul>
          <br />
        </div>
      </>
    );
  }
}

export default Resources;

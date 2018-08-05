import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './About.css';

export default class About extends Component {
	render () {
     	return (
         <div className="container">
				<h1 style={{'textAlign': 'center'}}>About</h1>
            <h2 style={{'color': '#16b286'}}>How Can FYE Benefit Me?</h2>

            <h3>
               Register Early (Priority Registration):
            </h3>
            <p>
               Avoid the registration rush and get your top choice of classes and professors.
            </p>

            <h3>
               Discover Opportunities Successful:
            </h3>
            <p>
               People often have large networks and connections to jobs and resources. FYE will help you build import-ant connections and discover valuable opportunities.
            </p>

            <h3>
               Build your OC community:
            </h3>
            <p>
               You are not alone! FYE is a destination for goal orientated students. Be part of a fun, motivated community.
            </p>

            <h3>
               Explore Top Transfer Destinations:
            </h3>
            <p>
               Looking to transfer? We’ll show you some of the best campuses in California: Stanford, UCLA, UCSB and other top destinations.
            </p>

            <h3>
               Sharpen your Focus:
            </h3>
            <p>
               We’ll give you lots of support to help you succeed: resume/interview/Netiquette/internship work-shops, peer mentors, academic advisors, health counselors and more.
            </p>

            <h3>
               Feel at Home:
            </h3>
            <p>
               The FYE/STEM Center (Condor Hall #333) is your home on campus. We have free tutoring, computers, charging stations, headphones, quiet space, and an overall great vibe.
            </p>

            <Button
               href="https://www.oxnardcollege.edu/departments/academic/title-v-hsi-grant/first-year-experience-fye-program/fye-application"
               target="_blank"
            >
               Apply!
            </Button>

				<h2 style={{'color': '#16b286'}}>
					Requirements
				</h2>

				<ul>
					<li>
						Must have Oxnard College are your primary college
					</li>
					<li>
						Meet with your FYE mentor once a month
					</li>
					<li>
						Meet with your FYE counselor twice a semester
					</li>
					<li>
						Attend four workshops per semester
					</li>
				</ul>

				<h2 style={{'color': '#16b286'}}>
					Additional Resources For Students
				</h2>
         </div>
      );
   }
}

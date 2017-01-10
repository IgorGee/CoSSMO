// @flow
import React from 'react'
import { Tabs, Tab, Chip } from 'react-toolbox'
import CoreMemberCard from './CoreMemberCard'
import FacultyAvatar from '../../Utilities/FacultyAvatar'

import superLinearGrowth from '../../images/misc/super-linear-growth.png'
import oreBuildingBridges from '../../images/misc/ore-building-bridges.png'
import lab1Image from '../../images/misc/lab1.jpg'
import lab2Image from '../../images/misc/lab2.jpg'
import { faculty as Images } from '../../images'

import s from './styles.scss'

export default class Events extends React.Component {
  state = {
    index: 0
  }

  handleTabChange = index => {
    this.setState({ index })
  }

  render() {
    return (
      <section className={s.root}>
        <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
          <Tab label="Our People">
            <h3>Core Members</h3>
            <main className={s.coreMembers}>
              <CoreMemberCard
                title="Felisa Vázquez-Abad"
                subtitle="Executive Director"
                image={Images.FelisaVazquezAbad}
                description="Felisa Vazquez-Abad is a Professor of Computer Science at Hunter College. Her research lies at the intersection between mathematics, engineering and computer science. She is mainly interested in the optimization of complex systems under uncertainty, primarily to understand, control and / or build efficient self-regulated learning systems. She obtained a B.Sc. in Physics in 1983 and a M.Sc. in Statistics and Operations Research in 1984 from the Universidad Nacional Autónoma de México. In 1989 she obtained a Ph.D. in Applied Mathematics from Brown University. After four years doing postdoctoral research at Brown University and later at the INRS-Telecommunications in Montreal, Canada, she became a professor of computer science at Université de Montréal, Canada in 1993. In 2004 she became a professor of mathematics and statistics at the University of Melbourne, Australia, until 2009, when she moved to CUNY."
              />
              <CoreMemberCard
                title="Deputy Director"
                subtitle="Ted Brown"
                image={Images.TedBrown}
                description="Ted Brown is the Executive Director of the CUNY Institute for Software Design and Development, a faculty member in the Computer Science Department at Queens College and the Graduate Center. He was the Executive Officer of the PhD program at CUNY for over 13 years until July 2013. His areas of research are analytic modeling, simulation methodology and design and analysis of algorithms. He has been collecting several large data bases and has become interested in their analysis."
              />
              <CoreMemberCard
                title="Saad Mneimneh"
                subtitle="Lead For Outreach"
                image={Images.SaadMneimneh}
                description="Saad Mneimneh is a Professor of Computer Science at Hunter College. His research revolves around the application of mathematical modeling and algorithmic techniques to various problems, including scheduling, load balancing, and more recently computational biology, especially the problem of RNA interaction and combinatorial problems inspired by it. His work includes complexity analysis, approximation algorithms, game theory/optimal strategies, and lower/upper bounds."
              />
              <CoreMemberCard
                title="Lead For Research"
                subtitle="Amotz Bar-Noy"
                image={Images.AmotzBarNoy}
                description="Amotz Bar-Noy received the B.Sc. degree (1981) in Mathematics and Computer Science (summa cum laude) and the Ph.D. degree (1987) in Computer Science, both from the Hebrew University, Israel. He was a post-doc fellow in Stanford University, California (1987-1989); a Research Staff Member with IBM Research Center, New York (1989-1996); an associate Professor with the Electrical Engineering Department of Tel Aviv University, Israel (1996-2001); a Principal Technical Staff Member with AT&T research labs in New Jersey (1999-2001). Since 2002 he is a Professor with the Computer and Information Science Department of Brooklyn College - CUNY and with the Computer Science Department of the Graduate Center of CUNY. He has published more than eighty refereed journal articles and more than one hundred refereed conference and workshop articles. He served as a co-chair of the ALGOSENSORS 2012 Symposium. In 2011, he was awarded the Edsger W. Dijkstra Prize in Distributed Computing for being an author of an outstanding paper on the principles of distributed computing, whose significance and impact on the theory and/or practice of distributed computing has been evident for at least a decade. His field of expertise belongs to the Theoretical Computer Science community and to the Networking community. The scope of his research is to bridge the gap between these two communities."
              />
            </main>
            <main className={s.affiliatedMembers}>
              <h3>Affiliated Members</h3>
              <section>
                <h4>Research Supervisors</h4>
                <Chip>
                  {FacultyAvatar('Matthew P. Johnson')}
                  <span>Matthew P. Johnson (Lehman College)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Saad Mneimneh')}
                  <span>Saad Mneimneh (Hunter College)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Ioannis Stamos')}
                  <span>Ioannis Stamos (Hunter College)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Lei Xie')}
                  <span>Lei Xie (Hunter College)</span>
                </Chip>
              </section>
              <section>
                <h4>Students</h4>
                <Chip>
                  {FacultyAvatar('Alexey Nikolaev')}
                  <span>Alexey Nikolaev (PhD)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Syed Ali Ahmed')}
                  <span>Syed Ali Ahmed (PhD)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Saman Farhat')}
                  <span>Saman Farhat (PhD)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Thomas Flynn')}
                  <span>Thomas Flynn (PhD)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Alexandra Diamond')}
                  <span>Alexandra Diamond (Masters)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Silvano Bernabel')}
                  <span>Silvano Bernabel (Masters)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Pinhus Dashevsky')}
                  <span>Pinhus Dashevsky (Columbia University)</span>
                </Chip>
              </section>
              <section>
                <h4>Research Assistantships</h4>
                <Chip>
                  {FacultyAvatar('Laurent Barraud')}
                  <span>Laurent Barraud (RA, Summer 2015)</span>
                </Chip>
              </section>
              <section>
                <h4>Past Students</h4>
                <Chip>
                  {FacultyAvatar('Alison Wang')}
                  <span>Alison Wang (UG Internship, 2013)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Timothy Herman')}
                  <span>Timothy Herman (UG Internship, 2013)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Tereza Manukian Shterenberg')}
                  <span>Tereza Manukian Shterenberg (UG Internship, 2014)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Daniel Fialkovsky')}
                  <span>Daniel Fialkovsky (UG Internship, 2014)</span>
                </Chip>
                <Chip>
                  {FacultyAvatar('Greg Dreyfus')}
                  <span>Greg Dreyfus (Masters, 2015)</span>
                </Chip>
              </section>
            </main>
          </Tab>
          <Tab label="Our Mission">
            <h3>Mission</h3>
            <ul>
              <li>Identify potential projects and participants across CUNY and in the community at large.</li>
              <li>Help members identify sources of funding and to prepare grant applications.</li>
              <li>Facilitate the execution of the projects, providing advice, space, and computer facilities.</li>
              <li>Create research programs by aggregating multiple projects with common defining factors. Such programs will promote interactions and networking that will increase the value of the research activities with respect to the contribution of individual projects.</li>
              <li>Manage program projects with core competencies.</li>
              <li>Establish collaborations outside of CUNY, both national and international.</li>
            </ul>

            <h3>Goals</h3>
            <p>CoSSMO will seek to increase the synergy among research, education and outreach. The Institute will aim to integrate academic excellence and service to the public and private sectors of society. It will address problems better solved applying stochastic modeling, computer simulation and/or optimization.</p>
            <p>The operational structure of the Institute will promote research outputs, and it will help create new educational material. It will promote collaborations with the public and private sectors through cross learning and networking, with less work required of the members than working on their own.</p>
            <img
              src={superLinearGrowth}
              alt="Super Linear Growth"
              width="100%"
              style={{margin: '16px auto'}}
            />

            <h3>Academic Purpose</h3>
            <ul>
              <li>Provide graduate and undergraduate students an experience that will enhance skills that are important for the workforce, in addition to the experience of conducting research in teams. In simple terms, to provide students with theoretical and fundamental insights supporting the application of computer simulation and optimization to solve real problems within a collegial environment.</li>
              <li>Increase productive research collaborations between CUNY faculty and colleagues, nationally and internationally.</li>
              <li>Create pedagogical material and case studies available to all CUNY faculty and students suitable for undergraduates.</li>
              <li>Increase and promote higher research output and knowledge transfer by identifying common features in the mathematical models of current programs and potential new projects.</li>
            </ul>

            <div className={s.orePrinciple}>
              <div>
                <h4>The ORE Principle</h4>
                <ul>
                  <li>Work with companies to apply mathematical models and simulation to solve problems.</li>
                  <li>Provide students with real problems that need solution in the public and private sectors.</li>
                  <li>Help students with critical thinking.</li>
                  <li>Foster multidisciplinary research.</li>
                  <li>Create new research opportunities.</li>
                </ul>
              </div>
              <img
                src={oreBuildingBridges}
                alt="ORE Building Bridges"
                width="300px"
              />
            </div>

            <h4>Outreach</h4>
            <p>Beyond the usual collaborative projects with industry, we envision projects that help develop mathematical and computer skills needed in the workplace. Each project will be validated through the endorsement from industrial partners and/or the Advisory Board.</p>

            <h4>Research</h4>
            <p>The Institute aims to establish a synergy of research and grant activity between the various colleges at CUNY and outside, focusing on all areas of the application of stochastic modeling, simulation and optimization. It will be very important to implement the Institute's operations so that different Departments and Faculty members benefit from cooperation, and that they should not compete for resources within the Institute.</p>

            <h4>Education</h4>
            <p>The research projects will foster interactions among students, faculty and industry members. Projects will be used to create pedagogical material as "case studies", made available throughout CUNY. Material gathered in this manner may be incorporated for training courses. Student internships at partner companies or government sectors and workshops at the Institute for the partner companies and government agencies will be promoted as well.</p>
          </Tab>
          <Tab label="Our Lab">
            <main className={s.lab}>
              <img src={lab1Image} alt="Lab Image 1" />
              <img src={lab2Image} alt="Lab Image 2" />
              <div>
                <p>The vision of synergy and interaction among researchers is reflected in the open plan of the lab where students from different backgrounds and levels carry out discussions and share experiences and knowledge.</p>
                <p>We provide a microwave oven, a refrigerator and a coffee machine for them to use. Our space provides a friendly, family-like environment to promote creative thinking in a modern setting.</p>
              </div>
              <div>
                <p>Our computer lab offers desk space for 8 permanent students, 3 academic visiting Faculty and a number of interns that can share 6 working stations. Interns usually come a few days per week, so we provide accommodate a convenient space for interaction and team work. The design of the lab is a modern open plan office with areas for informal discussions and interactions.</p>
                <p>In addition, CoSSMO has a server (Dell PowerVault NX3200 210-ABUN with 16GB (4x4GB) RDIMM, 1600MT/s) and a 10 TB Dell PowerEdge R420 data storage unit that can be accessed from the users computers to perform regular computations and store data in smaller test problems. For special projects, we offer students smartphones and tables on loan for development of prototype apps related to our research.</p>
              </div>
            </main>
          </Tab>
        </Tabs>
      </section>
    )
  }
}

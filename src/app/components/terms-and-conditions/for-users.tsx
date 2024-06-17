import { Box, Typography } from "@mui/material";

import ListItem from "./list-item";

const ForUsers: React.FC = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={700} paragraph>
        Terms &amp; Conditions For Users
      </Typography>
      <Box component="ol" p={0} m={0} pl={2}>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            Terms
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              In these terms and conditions for users (“Terms of Use”) the terms
              “we", "our", "us" means Fetishu Bait and its subsidiaries,
              employees, officers, agents, affiliates or assigned parties.
            </Box>
            <Box component={"li"} mb={1}>
              "Website" refers to fetishubait.com.
            </Box>
            <Box component={"li"} mb={1}>
              By accessing and using this Website, you are agreeing to be bound
              by the Website’s Terms of Use and the Privacy Policy (together the
              “Terms”), all applicable laws and regulations, and agree that you
              are responsible for compliance with any applicable local laws. If
              you do not agree with any of these Terms, your sole option is to
              immediately cease your use of this Website. The materials
              contained in this Website are protected by applicable copyright
              and trademark law.
            </Box>
            <Box component={"li"} mb={1}>
              You may not use the Website and may not accept these Terms if (a)
              you are not of eighteen (18) years of age, or (b) you are a person
              who is either barred or otherwise legally prohibited from
              receiving or using the Website under the laws of the country in
              which you are a resident or from which you access or use the
              Website.
            </Box>
            <Box component={"li"} mb={1}>
              These Terms are effective between you and us as of the date you
              accept these Terms, and you do so by default through the use of
              the Website.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            Use license &amp; restrictions
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Permission is granted to temporarily download copies of the
              materials (information or software) on the Website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
              <Box component="ol" my={2}>
                <ListItem>a. modify or copy the materials;</ListItem>
                <ListItem>
                  b. use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </ListItem>
                <ListItem>
                  c. attempt to decompile or reverse engineer any software
                  contained on the Website;
                </ListItem>
                <ListItem>
                  d. remove any copyright or other proprietary notations from
                  the materials; or
                </ListItem>
                <ListItem>
                  e. transfer the materials to another person or "mirror" the
                  materials on any other server.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              In accessing or using our Website you irrevocably agree and
              undertake to ensure that you will not:
              <Box component="ol" my={2}>
                <ListItem>
                  a. use any automated device, software process or means to
                  access, retrieve, scrape, or index our Website or any content
                  on our Website;
                </ListItem>
                <ListItem>
                  b. use any device, software, process or means to interfere or
                  attempt to interfere with the proper working on our Website;
                </ListItem>
                <ListItem>
                  c. undertake any action that will impose a burden or make
                  excessive traffic demands on our infrastructure that we deem,
                  in our sole discretion to be unreasonable or disproportionate
                  Website usage;
                </ListItem>
                <ListItem>
                  d. use or index any content or data on our Website for
                  purposes of:
                  <Box component="ol" my={2}>
                    <ListItem>
                      i. constructing or populating a searchable database of
                      properties,
                    </ListItem>
                    <ListItem sx={{ ml: "-4px" }}>
                      ii. building a database of property information; or
                    </ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      iii. competing with us in any manner that we have not
                      specifically authorised;
                    </ListItem>
                  </Box>
                </ListItem>
                <ListItem>
                  e. transmit spam, chain letters, contents, junk email,
                  surveys, or other mass messaging, whether commercial in nature
                  or not;
                </ListItem>
                <ListItem>
                  f. use our Website or any content from our Website in any
                  manner which we in our sole discretion determine as not
                  reasonable and/or not for the purpose which it is made
                  available;
                </ListItem>
                <ListItem>
                  g. violate the rights of any person, including copyright,
                  trade secret, privacy right, or any other intellectual
                  property or proprietary right;
                </ListItem>
                <ListItem>
                  h. pose as any person or entity or attempt to solicit money,
                  passwords or personal information from any person;
                </ListItem>
                <ListItem>
                  i. act in violation of any such terms or other condition posed
                  by us or any applicable law;
                </ListItem>
                <ListItem>
                  j. reproduce, republish, retransmit, modify, adapt,
                  distribute, translate, create derivative works or adaptation
                  of, publicly display, sell, trade, or in any way exploit our
                  Website or any content on our Website, except as expressly
                  authorised by us; or
                </ListItem>
                <ListItem>
                  k. transmit or attempt to transmit any computer viruses,
                  worms, defects or other items of a destructive manner.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              We reserve the right to exercise whatever means we deem necessary
              to prevent unauthorized access to our use of the Website,
              including but not limited to, instituting technological barriers,
              or reporting your conduct to any person or entity.
            </Box>
            <Box component={"li"} mb={1}>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by us at any time. Upon
              terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            YOUR RESPONSIBILITIES
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              We are not an estate agency and we provide a service whereby
              agents may market and you may view property details (“Details”)
              together with other content hosted and developed by us. Agents and
              third parties are responsible for preparing the Details and
              fielding enquiries directly from you. We do not get involved in
              any communications between you and agents and we do not
              participate in any part of the transaction.
            </Box>
            <Box component={"li"} mb={1}>
              Details are hosted by us in good faith but are produced directly
              by agents and/or third parties and have not been verified by us.
              You are responsible for making your own enquiries and we provide
              no guarantee and accept no responsibility for the accuracy or
              completeness of any information contained within the Details.
            </Box>
            <Box component={"li"} mb={1}>
              You are responsible for checking, confirming and satisfying
              yourself as to the accuracy of any Details.
            </Box>
            <Box component={"li"} mb={1}>
              You are responsible for instructing a surveyor and/or obtaining
              legal advice before committing to any purchase.
            </Box>
            <Box component={"li"} mb={1}>
              You are responsible for ensuring that you act in good faith
              towards any other parties.
            </Box>
            <Box component={"li"} mb={1}>
              You represent and warrant that your use of our Website will comply
              at all times with these Terms of Use and any further terms that
              may apply to you in relation to your use of our Website, including
              all amendments and revisions to these Terms in accordance with
              Clause 8 herein;
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            LIMITATIONS
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              In no event will we be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the
              materials on the Website, even if one of our authorised
              representatives has been notified orally or in writing of the
              possibility of such damage.
            </Box>
            <Box component={"li"} mb={1}>
              We will not be liable for any loss or damage arising under or in
              connection with:
              <Box component="ol" my={2}>
                <ListItem>
                  a. any failures due to software or internet errors or
                  unavailability, or any other circumstances beyond our
                  reasonable control;
                </ListItem>
                <ListItem>
                  b. any loss of your password or account if caused by a
                  breakdown, error, loss of power or otherwise cause by or to
                  your computer system and/or your account;
                </ListItem>
                <ListItem>
                  c. the use of, or inability to use, our Website;
                </ListItem>
                <ListItem>
                  d. the reliance on any content or information displayed on our
                  Website;
                </ListItem>
                <ListItem>
                  e. any direct, consequential, special or punitive loss,
                  damage, costs and expenses;
                </ListItem>
                <ListItem>f. loss of profit;</ListItem>
                <ListItem>g. loss of business;</ListItem>
                <ListItem>h. loss of reputation;</ListItem>
                <ListItem>i. depletion of goodwill; or</ListItem>
                <ListItem>
                  j. loss of, damage to or corruption of data.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              Unless we otherwise expressly agree in writing, you agree not to
              use our Website for any commercial or business purposes.
            </Box>
            <Box component={"li"} mb={1}>
              We will not be liable for any loss or damage caused by a virus,
              distributed denial of service attack or other technological
              harmful material that may infect your computer equipment, computer
              programmes, data or other proprietary material due to your use of
              our Website or to your downloading of any content on it, or any
              website linked to it.
            </Box>
            <Box component={"li"} mb={1}>
              If you enquire about a property on this Website, you acknowledge
              and agree that your details will be sent by email directly to the
              agent, estate agent, landlord, developer marketing the property or
              properties you are enquiring about. We do not accept any liability
              for any subsequent communications that you receive directly from
              that estate agent, landlord or developer and/or any third party.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            REVISIONS AND ERRATA
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              he materials appearing on the Website could include technical,
              typographical, or photographic errors. We do not warrant that any
              of the materials on its Website are accurate, complete, or
              current. We may make changes to the materials contained on the
              Website at any time without notice.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            AVAILABILITY OF WEBSITE
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              We strive to ensure that our Website and the services are
              available to you at all times but cannot guarantee that either the
              Website or the services will operate continuously, without
              interruptions or be fault free. On occasion, necessary maintenance
              or upgrade work requires us to make the Website and the services
              unavailable without notice, but we aim to keep downtime to a
              minimum. We accept no liability for any interruption or loss of
              service. We reserve the absolute right to alter, suspend or
              discontinue any part of our Website or the services, including
              your access to it.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            LINKS & THIRD PARTIES
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Our Website may contain links, hyperlinks and pointers to third
              party products, services and/or websites that are not affiliated
              with Us. We have no control over the products, services or
              websites of these third parties and We do not guarantee or take
              responsibility for them. Our Website may also contain advertising
              from third parties and we are not responsible, nor do we make any
              warranties or representations for any misleading or inaccurate
              advertisements which are the sole responsibility of the
              advertiser.
            </Box>
            <Box component={"li"} mb={1}>
              Any links or advertisements on our Website should not be taken as
              an endorsement by us of any kind. Furthermore, our Website
              contains data provided by third parties and we accept no
              responsibility, nor do we make any warranties or representations
              for any inaccuracies in this material. You agree to release us
              from any claims or disputes of any kind arising from or in any way
              connected to such disputes with third parties.
            </Box>
            <Box component={"li"} mb={1}>
              By using the Website, you grant us an irrevocable, world-wide,
              royalty free license to commercialse, copy, license to other
              persons, use and adapt for any purpose any material you generate
              or submit to make use of the Website.
            </Box>
            <Box component={"li"} mb={1}>
              We do not warrant that the content, links, or sub-domains
              contained on, or associate with our Website will be available and
              accessible to you at all times. Information on our publications,
              posts, inserts, information, content should not be regarded as a
              substitute for professional legal, financial or real estate
              advice.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            SITE TERMS OF USE MODIFICATIONS
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              We may revise these Terms of Use and any such Terms for the
              Website at any time without notice. By using this Website you are
              agreeing to be bound by the Terms of Use.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            CONTRIBUTIONS
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              In these Terms of Use “Contributions” means any information
              including data, text, video, still images, audio or other material
              that we have permitted you to host, share, publish, post, store or
              upload on our Website.
            </Box>
            <Box component={"li"} mb={1}>
              We may at any time, without liability to you, remove, alter or
              disable access to any or all of your Contributions in our sole
              discretion without prior notice to you. Without limiting the
              previous sentence, we may remove or disable access to any or all
              of your Contributions if we consider that:
              <Box component="ol" my={2}>
                <ListItem>
                  a. those Contributions are in breach of any law or regulation;
                </ListItem>
                <ListItem>
                  b. those Contributions infringe the intellectual property
                  rights of any third party;
                </ListItem>
                <ListItem>
                  c. it is required to do so by a regulatory body or any
                  relevant authority pursuant to an interim or final take-down
                  notice;
                </ListItem>
                <ListItem>
                  d. those Contributions;
                  <Box component="ol" my={2}>
                    <ListItem>i. misleading or deceptive;</ListItem>
                    <ListItem sx={{ ml: "-4px" }}>
                      ii. inappropriate having regard to the purpose of our
                      Website;
                    </ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      iii. likely to cause offence;
                    </ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      iv. materially incorrect;
                    </ListItem>
                    <ListItem sx={{ ml: "-4px" }}>v. obscene;</ListItem>
                    <ListItem sx={{ ml: "-8px" }}>vi. defamatory;</ListItem>
                    <ListItem sx={{ ml: "-12px" }}>
                      vii. otherwise unlawful and/or against the customs or
                      norms of the region in which this Website is referred too;
                      or
                    </ListItem>
                    <ListItem sx={{ ml: "-16px" }}>
                      viii. corrupted, due to the presence of a virus or other
                      disabling code.
                    </ListItem>
                  </Box>
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              To the extent that any Contributions are proprietary in nature,
              you grant us a worldwide, non-exclusive, royalty-free, perpetual,
              transferable and irrevocable license to use, reproduce, modify,
              adapt, translate, distribute, publish, create derivative works
              from and display and publicly perform your Contributions
              throughout the world in any medium, whether currently in existence
              or not.
            </Box>
            <Box component={"li"} mb={1}>
              You also grant each user of our Website the right to use your name
              or the name you submit with the Contribution, and, the right to
              represent and warrant that:
              <Box component="ol" my={2}>
                <ListItem>
                  a. you own and control all of the rights to the Contributions;
                  or
                </ListItem>
                <ListItem>
                  b. you have the lawful right including all necessary licences,
                  rights, consents and permissions to use and authorise us to
                  display the Contributions.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              For any Contributions that you may retain moral rights in, you
              declare that:
              <Box component="ol" my={2}>
                <ListItem>
                  a. you do not require that any personally identifying
                  information be used in connection with the Contribution, or
                  any derivative work, upgrade or update of the Contribution;
                  and
                </ListItem>
                <ListItem>
                  b. You understand that when accessing our Website you may be
                  exposed to the Contributions of other users of our Website.
                  You acknowledge and agree that we do not have control of and
                  are not responsible nor do we warrant the veracity of these
                  other Contributions.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              You represent and warrant that:
              <Box component="ol" my={2}>
                <ListItem>
                  a. you have the lawful right including all necessary licenses,
                  rights, consents and permissions to use and authorise us to
                  display your Contributions;
                </ListItem>
                <ListItem>
                  b. you will not make any Contributions that infringe the
                  intellectual property rights of any third party, and you agree
                  to pay all royalties, fees or other monies payable by reason
                  of any Contributions made by you; and
                </ListItem>
                <ListItem>
                  c. you will not make any Contributions that:
                  <Box component="ol" my={2}>
                    <ListItem>i. are misleading;</ListItem>
                    <ListItem sx={{ ml: "-4px" }}>ii. are deceptive;</ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      iii. are materially incorrect;
                    </ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      iv. are likely to cause offense;
                    </ListItem>
                    <ListItem sx={{ ml: "-4px" }}>
                      v. directly or indirectly involve the advertising or
                      marketing of any products or services;
                    </ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      vi. are obscene, including pornographic, hateful, racially
                      or ethnically offensive material;
                    </ListItem>
                    <ListItem sx={{ ml: "-12px" }}>
                      vii. are defamatory;
                    </ListItem>
                    <ListItem sx={{ ml: "-16px" }}>
                      viii. are otherwise unlawful or encourage unlawful
                      conduct; or
                    </ListItem>
                    <ListItem sx={{ ml: "-8px" }}>
                      ix. are otherwise inappropriate having regard to the
                      purpose of our Website.
                    </ListItem>
                  </Box>
                </ListItem>
              </Box>
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            INTELLECTUAL PROPERTY
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Unless otherwise expressly stated, all contents of the Website are
              copyrights, trademarks, trade dress and/or other intellectual
              property owned, controlled or licensed by us, or one of our
              affiliates or by third parties who have licensed their materials
              to us and are protected by the applicable laws.
            </Box>
            <Box component={"li"} mb={1}>
              We, together with our suppliers and licensors expressly reserve
              all intellectual property rights in all text, programs, products,
              processes, technology, content and other materials, which appear
              on this Website. Access to this Website does not confer and shall
              not be considered as conferring upon anyone any license under any
              of our or any third party's intellectual property rights. Any use
              of this Website or its contents, including copying or storing it
              or them in whole or part, other than for your own personal,
              non-commercial use, is prohibited without our permission. You may
              not modify, distribute or re-post anything on this Website for any
              purpose.
            </Box>
            <Box component={"li"} mb={1}>
              Our names and logos and all related product and service names,
              design marks and slogans are the trademarks or service marks of us
              or our licensors. No trademark or service mark license is granted
              in connection with the materials contained on this Website.
            </Box>
            <Box component={"li"} mb={1}>
              Access to this Website does not authorise anyone to use any name,
              logo or mark in any manner whatsoever.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            ELECTRONIC COMMUNICATIONS
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              When you use the Website or send emails to us, you are
              communicating with us electronically. You consent to receive
              electronically any communications related to your use of this
              Website. We will communicate with you by email or by posting
              notices on this Website. You agree that all agreements, notices,
              disclosures and other communications that are provided to you
              electronically satisfy any legal requirement that such
              communications be in writing. All notices from us intended for
              receipt by you shall be deemed delivered and effective when sent
              to the email address you provide on the Website for your account.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            INDEMNITY
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              You agree to indemnify and hold us and our affiliates (and our
              officers, agents, partners and employees) against any and all
              loss, liability, claim or demand, including reasonable attorney’s
              fees, arising out of, or in connection with your use of and access
              to our Website or making Contributions not in accordance with the
              Terms.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            DISCLAIMER
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              The materials on our Website are provided on an "as is" and “as
              available” basis and we make no warranties, expressed or implied,
              and hereby disclaim and negate all other warranties, including
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights. Further, we do not warrant or make any representation
              concerning the accuracy, likely results, or reliability of the use
              of the materials on the Website or otherwise relating to such
              materials or on any site linked to this Website.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            MONITORING AND RECORDING TELEPHONE CALLS
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Real estate broker and developer clients who have subscribed to
              our call tracking service have elected to have their call enquires
              generated through the Website. Such calls may be tracked and
              recorded for training and customer service assessment purposes.
              You consent in advance to any such recording. We will remind you
              of our recording before each phone conversation.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            GOVERNING LAW
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              These Terms of Use and your access to the Website is subject to
              and governed by the laws of the Arab Republic of Egypt. You agree
              to submit to the exclusive jurisdiction of the Courts of the Arab
              Republic of Egypt.
            </Box>
            <Box component={"li"} mb={1}>
              If any term of the Agreement is or may become for any reason
              invalid or unenforceable at law, the validity and enforceability
              of the remainder will not be affected.
            </Box>
          </ol>
        </Box>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            CONTACT US
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Fetishubait.com subscribers are licensed real estate brokers,
              developers and hotel apartment providers. Our advertisers are
              contractually obligated to only list properties that are available
              for sale or lease with the proper authority from the owner and all
              other required governing bodies. Properties listed on
              fetishubait.com should be a fair and accurate portrayal of the
              property itself and the proposed transaction. To report any
              suspected fraudulent or misleading property postings on our site
              please send us an email with the details to info@fetishubait.com
            </Box>
          </ol>
        </Box>
      </Box>
      <Typography variant="body2" mb={{ xs: 4, md: 8 }}>
        If you have any queries, complaints or recommendations about these Terms
        of Use, please contact us at the following address:{" "}
        <a href="mailto:info@fetishubait.com">info@fetishubait.com</a>
      </Typography>
    </>
  );
};

export default ForUsers;

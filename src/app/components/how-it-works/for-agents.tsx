import { Box, ListItem, Typography } from "@mui/material";

const ForAgents: React.FC = () => {
  return (
    <>
      <Typography paragraph>
        Welcome to Fetishu Bait our Property Search App! We are thrilled to have
        you join our platform and leverage its powerful tools to enhance your
        real estate business. Here's a step-by-step guide on how our app works
        for agents:
      </Typography>
      <Box component="ol" p={0} m={0} pl={2}>
        <Box component={"li"} mb={2}>
          <Typography
            variant="body2"
            fontWeight={700}
            paragraph
            textTransform={"uppercase"}
          >
            Install the PWA APP:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Depending on the device and browser you are using, the process to
              initiate the PWA installation may vary slightly:
              <Box component="ol" my={2}>
                <ListItem>
                  a. On Android devices with Google Chrome: When you visit the
                  PWA-enabled website, a prompt should appear at the bottom of
                  the screen asking if you want to add the site to your home
                  screen.
                </ListItem>
                <ListItem>
                  b. On iOS devices with Safari: Tap the share icon (the square
                  with an upward-pointing arrow) and select "Add to Home Screen"
                  from the options.
                </ListItem>
                <ListItem>
                  c. On other desktop or mobile browsers: The installation
                  process may be slightly different, but you should still look
                  for a similar "Add to Home Screen" or "Install" button or
                  option.
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
            Create Your Profile:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Open the app and navigate to the list with us page.
            </Box>
            <Box component={"li"} mb={1}>
              Fill out the registration form by providing your
              <Box component="ol" my={2}>
                <ListItem>a. Full Name</ListItem>
                <ListItem>a. Email address</ListItem>
                <ListItem>b. Phone number.</ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              Review the information you've entered to ensure it is accurate.
            </Box>
            <Box component={"li"} mb={1}>
              Agree to the app's terms of service and privacy policy.
            </Box>
            <Box component={"li"} mb={1}>
              Click the "Submit" button to submit your registration.
            </Box>
            <Box component={"li"} mb={1}>
              One of our customers agents will call you and assist with creating
              a profile for you
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
            Build Your Portfolio:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              After completing your profile, navigate to the "Add Listing" or
              "Post Property" section of the app.
            </Box>
            <Box component={"li"} mb={1}>
              Begin by selecting the property type, such as apartment, concrete,
              or room inside house.
            </Box>
            <Box component={"li"} mb={1}>
              Provide the property's location details, including the address,
              city, state, and zip code.
            </Box>
            <Box component={"li"} mb={1}>
              Input the key features and specifications of the property, such as
              <Box component="ol" my={2}>
                <ListItem>a. Number of bedrooms and bathrooms.</ListItem>
                <ListItem>b. Square footage.</ListItem>
                <ListItem>c. Lot size.</ListItem>
                <ListItem>d. Amenities.</ListItem>
                <ListItem>e. Architectural style.</ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              Set the pricing information, including the listing price, rental
              rate, or any other relevant financial details.
            </Box>
            <Box component={"li"} mb={1}>
              Upload high-quality, visually appealing images that showcase the
              property's interior and exterior.
            </Box>
            <Box component={"li"} mb={1}>
              Include any additional details or descriptions that will help
              potential buyers or renters understand the unique value and
              benefits of the listing.
            </Box>
            <Box component={"li"} mb={1}>
              Review the information you've provided to ensure accuracy and
              completeness.
            </Box>
            <Box component={"li"} mb={1}>
              Publish the listing to make it visible to users searching for
              properties.
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
            Manage Your Listings:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Our app provides a user-friendly interface to manage your listings
              efficiently. Update property information, edit pricing, add or
              remove images, and keep your listings up to date. You can also
              track the performance of your listings, view analytics, and make
              adjustments to optimize results.
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
            Receive and Manage Leads:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              As a registered agent, you'll receive leads from interested buyers
              or renters who inquire about your listings. Our app provides a
              centralized platform to manage and track these leads effectively.
              You can view lead details, respond to inquiries, schedule property
              visits, and maintain a clear communication history.
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
            Collaborate with Clients:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Our app facilitates seamless collaboration with your clients. You
              can share property details, images, and other relevant information
              directly within the app. This allows for efficient communication
              and eliminates the need for multiple channels of communication
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
            Collaborate and Share:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Collaborate with family members, friends, or your real estate
              agent by sharing properties of interest. Our app allows you to
              send property links, images, and notes, facilitating effective
              collaboration and decision-making.
            </Box>
          </ol>
        </Box>
      </Box>
      <Typography mb={{ xs: 1, md: 2 }}>
        Your feedback is important to us! We value your input and continuously
        strive to improve our app. Feel free to provide feedback on property
        listings, user experience, or any other aspect of the app. Your
        suggestions will help us enhance our services. Start your property
        search journey today with our user-friendly Property Search App. We are
        dedicated to simplifying the process, providing you with a seamless and
        efficient experience. Happy searching!
      </Typography>
      <Typography mb={{ xs: 4, md: 8 }}>
        If you have any questions or need assistance, please don't hesitate to
        contact our support team. We are here to help you every step of the way.
      </Typography>
    </>
  );
};

export default ForAgents;

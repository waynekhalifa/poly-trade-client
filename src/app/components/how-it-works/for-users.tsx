import { Box, ListItem, Typography } from "@mui/material";

const ForUsers: React.FC = () => {
  return (
    <>
      <Typography paragraph>
        Welcome to Fetishu Bait our Property Search App! We are excited to guide
        you through the process of finding your dream property. Here's how our
        app works:
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
            Create an Account:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Open the app and navigate to the register page.
            </Box>
            <Box component={"li"} mb={1}>
              Fill out the registration form by providing your
              <Box component="ol" my={2}>
                <ListItem>a. Email address</ListItem>
                <ListItem>b. Secure password.</ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              Review the information you've entered to ensure it is accurate.
            </Box>
            <Box component={"li"} mb={1}>
              Agree to the app's terms of service and privacy policy.
            </Box>
            <Box component={"li"} mb={1}>
              Click the "Register" button to submit your registration.
            </Box>
            <Box component={"li"} mb={1}>
              Check your email inbox for the account activation message we sent
              you.
            </Box>
            <Box component={"li"} mb={1}>
              Locate the activation link within the email.
            </Box>
            <Box component={"li"} mb={1}>
              Click on the activation link to complete the account setup
              process.
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
            Set Your Preferences:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              Once you've registered for our fetishu bait app, login so you can
              customize your search preferences to better suit your needs.
              Follow these steps to set up your personalized search criteria:
              <Box component="ol" my={2}>
                <ListItem>
                  a. Specify your desired location. This could be a city,
                  neighborhood, or zip code.
                </ListItem>
                <ListItem>
                  b. Select the property type you're interested in, such as
                  single-family home, condominium, or townhouse.
                </ListItem>
                <ListItem>
                  c. Input your budget range to filter properties within your
                  price point.
                </ListItem>
                <ListItem>
                  d. Choose the number of bedrooms that matches your
                  requirements.
                </ListItem>
                <ListItem>
                  e. Consider adding any other relevant criteria, such as number
                  of bathrooms, square footage, or amenities.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              By taking the time to configure these search preferences, our app
              will be able to provide you with tailored results that align more
              closely with your unique real estate needs. This will streamline
              your property search and help you find the perfect home more
              efficiently.
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
            Explore Listings:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              After configuring your search preferences, you can begin exploring
              our extensive collection of property listings.
            </Box>
            <Box component={"li"} mb={1}>
              The app's user-friendly interface will allow you to easily filter
              and sort the listings based on your specified criteria. This may
              include location, property type, price range, number of bedrooms,
              and any other relevant parameters you've set.
            </Box>
            <Box component={"li"} mb={1}>
              For each listing, you can view detailed property information, such
              as:
              <Box component="ol" my={2}>
                <ListItem>a. High-quality images.</ListItem>
                <ListItem>b. Floor plans.</ListItem>
                <ListItem>
                  c. Key details like square footage, number of bathrooms,
                  amenities, and more.
                </ListItem>
              </Box>
            </Box>
            <Box component={"li"} mb={1}>
              Thoroughly review the available listings to identify properties
              that align with your preferences and needs.
            </Box>
            <Box component={"li"} mb={1}>
              Use the app's sorting and filtering tools to refine your search
              and quickly zero in on the most promising options.
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
            Save Favorites:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              If you come across a property that interests you while browsing
              the listings, locate the "Save to Favorites" or "Add to Favorites"
              button within the property's details.
            </Box>
            <Box component={"li"} mb={1}>
              Click on this button to add the listing to your personal
              favorites.
            </Box>
            <Box component={"li"} mb={1}>
              Once a property is saved, you can access it again by navigating to
              the "Favorites" or "Saved Listings" section of the app.
            </Box>
            <Box component={"li"} mb={1}>
              Take advantage of this organizational feature to easily compare
              and contrast the properties you've saved, making it simpler to
              keep track of the listings that best fit your criteria.
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
            Contact Property Owners/Agents:
          </Typography>
          <ol>
            <Box component={"li"} mb={1}>
              If you have questions or need additional information about a
              property, our app provides a convenient messaging system. You can
              reach out to property owners or agents directly within the app,
              allowing for seamless communication and efficient coordination.
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

export default ForUsers;

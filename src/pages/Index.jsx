import { Container, VStack, Heading, Text, Box, List, ListItem, ListIcon, FormControl, FormLabel, Input, Select, Checkbox, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaCheckCircle, FaSun } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header Section */}
      <VStack spacing={4} textAlign="center" mb={8}>
        <Heading as="h1" size="2xl">
          Förverkliga din hållbara framtid med EcoFinance
        </Heading>
        <Text fontSize="xl">Flexibla solcellslån med snabba installationsalternativ.</Text>
      </VStack>

      {/* Introduction Section */}
      <Box mb={8}>
        <Text fontSize="lg">EcoFinance erbjuder skräddarsydda solcellslån för att hjälpa dig att omfamna förnybar energi och minska ditt koldioxidavtryck. Med flexibla betalningsplaner och ett engagemang för snabba installationer gör vi det enkelt för dig att investera i solenergi.</Text>
      </Box>

      {/* Why Choose EcoFinance Section */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Varför välja EcoFinance?
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Flexibla lånevillkor: Välj mellan 5, 10 eller 15 års återbetalningsplaner som passar din ekonomiska situation.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Konkurrenskraftiga räntor: Njut av attraktiva räntor och potentiella långsiktiga besparingar på elräkningar.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Snabb installation: Redo att gå vidare? Gör en handpenning så har vi din solcellsinstallation klar inom 4 månader.
          </ListItem>
        </List>
      </Box>

      {/* How It Works Section */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Så här fungerar det
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaSun} color="yellow.500" />
            Välj din plan: Välj en återbetalningsperiod som passar dig – 5, 10 eller 15 år.
          </ListItem>
          <ListItem>
            <ListIcon as={FaSun} color="yellow.500" />
            Skicka din intresseanmälan: Fyll i formuläret nedan för att uttrycka ditt intresse för vårt solcellslånsprogram.
          </ListItem>
          <ListItem>
            <ListIcon as={FaSun} color="yellow.500" />
            Handpenning: Om du är redo att gå vidare, gör en handpenning för att påskynda din installation.
          </ListItem>
          <ListItem>
            <ListIcon as={FaSun} color="yellow.500" />
            Installation: Vårt expertteam hanterar installationsprocessen och säkerställer att den är klar inom 4 månader.
          </ListItem>
        </List>
      </Box>

      {/* Benefits Section */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Fördelar med att gå över till solenergi med EcoFinance
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Miljöpåverkan: Bidra till en grönare planet genom att minska dina koldioxidutsläpp.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Energisparande: Minska ditt beroende av traditionella energikällor och sänk dina energikostnader.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Ökat fastighetsvärde: Höj värdet på din fastighet med moderna solcellsinstallationer.
          </ListItem>
        </List>
      </Box>

      {/* Call to Action Section */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Redo att komma igång?
        </Heading>
        <Text fontSize="lg">Fyll i formuläret nedan för att uttrycka ditt intresse för vårt solcellslånsprogram. Vårt team kontaktar dig för att diskutera nästa steg.</Text>
      </Box>

      {/* Form Section */}
      <Box mb={8}>
        <form>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Namn</FormLabel>
              <Input placeholder="Ditt namn" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>E-post</FormLabel>
              <Input type="email" placeholder="Din e-post" />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Telefonnummer</FormLabel>
              <Input type="tel" placeholder="Ditt telefonnummer" />
            </FormControl>
            <FormControl id="loan-term" isRequired>
              <FormLabel>Föredragen lånetid</FormLabel>
              <Select placeholder="Välj lånetid">
                <option value="5">5 år</option>
                <option value="10">10 år</option>
                <option value="15">15 år</option>
              </Select>
            </FormControl>
            <FormControl id="deposit">
              <Checkbox>Ja, jag är redo att göra en handpenning</Checkbox>
            </FormControl>
            <Button type="submit" colorScheme="green" size="lg">
              Skicka
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Contact Information Section */}
      <Box mb={8}>
        <Text fontSize="lg">För mer information, vänligen kontakta oss på:</Text>
        <Text>E-post: info@ecofinance.com</Text>
        <Text>Telefon: +46 123 456 789</Text>
      </Box>

      {/* Footer Section */}
      <Box textAlign="center" mt={8}>
        <Text>Tillsammans kan vi skapa en renare, grönare värld.</Text>
      </Box>
    </Container>
  );
};

export default Index;

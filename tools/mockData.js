const upliftments = [
  {
    id: 1,
    number: 1234567,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    clientId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    number: 1234568,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    clientId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    number: 1234569,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    clientId: 2,
    category: "JavaScript"
  }
];

const clients = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newUpliftment = {
  id: null,
  number: null,
  title: "",
  clientId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUpliftment,
  upliftments,
  clients
};

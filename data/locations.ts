export const locations = {
  india: {
    name: "India",
    states: {
      maharashtra: {
        name: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur"],
      },
      karnataka: {
        name: "Karnataka",
        cities: ["Bengaluru", "Mysuru", "Mangaluru"],
      },
      delhi: {
        name: "Delhi",
        cities: ["New Delhi"], // UT → allowed
      },
      punjab: {
        name: "Punjab",
        stateslug: "punjab",
        cities: ["Ludhiana", "Amritsar", "Jalandhar", "Mohali", "Chandigarh"],
      },
      haryana: {
        name: "Haryana",
        stateslug: "haryana",
        cities: ["Gurugram", "Faridabad", "Panchkula"],
      },
    },
  },
  australia: {
    name: "Australia",
    states: {
      "new-south-wales": {
        name: "New South Wales",
        cities: ["Sydney", "Newcastle", "Wollongong"],
      },
      victoria: {
        name: "Victoria",
        cities: ["Melbourne", "Geelong", "Ballarat"],
      },
      queensland: {
        name: "Queensland",
        cities: ["Brisbane", "Gold Coast", "Sunshine Coast"],
      },
    },
  },

  usa: {
    name: "United States",
    states: {
      california: {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "San Diego"],
      },
      texas: {
        name: "Texas",
        cities: ["Houston", "Austin", "Dallas"],
      },
      florida: {
        name: "Florida",
        cities: ["Miami", "Orlando", "Tampa"],
      },
    },
  },

  canada: {
    name: "Canada",
    states: {
      ontario: {
        name: "Ontario",
        cities: ["Toronto", "Ottawa", "Mississauga"],
      },
      british_columbia: {
        name: "British Columbia",
        cities: ["Vancouver", "Surrey", "Burnaby"],
      },
    },
  },

  uk: {
    name: "United Kingdom",
    states: {
      england: {
        name: "England",
        cities: ["London", "Manchester", "Birmingham"],
      },
      scotland: {
        name: "Scotland",
        cities: ["Edinburgh", "Glasgow", "Aberdeen"],
      },
    },
  },
};

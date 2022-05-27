let publicSafetyIndicators = [
    {
        id: 1,
        name: "Average Daily Number of Emergency Calls per Month",
        description: "This indicator tracks the average daily number of calls to 911 in San Francisco county, drawing from data collected by the San Francisco local government <a link='https://sfgov.org/scorecards/public-safety/911-call-volume-and-response'>[1]</a>. The average daily number is calculated by summing the number of calls received over a month and dividing by the number of days in that month.",
        slug: "emergency-calls",
        favourite: false,
    },
]

let environmentalSustainabilityIndicators = [
    {
        id: 1,
        name: "CO2 Emissions",
        description: "San Francisco’s carbon footprint has been steadily shrinking, as this data from the city government <a link = 'https://sfenvironment.org/carbonfootprint'>[1]</a> <a link = 'https://data.sfgov.org/Energy-and-Environment/San-Francisco-Communitywide-Greenhouse-Gas-Invento/btm4-e4ak'>[2]</a> demonstrates. Over this same time period (1990 - 2019), the city’s population grew by 22% <a link = 'https://datacommons.org/place/geoId/0667000?utm_medium=explore&mprop=count&popt=Person&hl=en'>[3]</a>.",
        slug: "co2-emissions",
        favourite: false,
    },
    {
        id: 2,
        name: "Sources of Current CO2 Emissions",
        description: "This indicator breaks down 2019 carbon emissions into their sources, drawing from studies conducted by the city government <a link='https://sfenvironment.org/carbonfootprint'>[1]</a>",
        slug: "co2-emissions-sources",
        favourite: false,
    },
    {
        id: 3,
        name: "Days Per Year with Good Air Quality",
        description: "Each day, the Environmental Protection Agency calculates and publishes an Air Quality Index, which monitors five main air pollutants: ground-level ozone, particle pollution, carbon monoxide, sulfur dioxide and nitrogen dioxide. This indicator aggregates the number of days each year where this rating was at its best level of “Good”, and was drawn from the San Francisco Scorecards <a link = 'https://sfgov.org/scorecards/environment/days-epa-air-quality-index-rating-good'>[1]</a>.",
        slug: "daily-air-quality",
        favourite: false,
    },
    {
        id: 4,
        name: "Per Capita Water Consumption",
        description: "This indicator tracks the average amount of water used by a single residential customer in San Francisco each day, including water served by public utility companies. It uses data collected by the San Francisco government through its Scorecard program <a link='https://sfgov.org/scorecards/environment/water-sold-san-francisco-residential-customers'>[1]</a>.",
        slug: "per-capita-water-consumption",
        favourite: false,
    },
    {
        id: 5,
        name: "Recycling and Composting Rate",
        description: "This indicator tracks the percentage of trash generated by citizens and small businesses that is either recycled or composed, and therefore saved from being sent to a landfill. It uses data collected by the San Francisco government through its scorecard program <a link='https://sfgov.org/scorecards/environment/residential-and-small-business-landfill-diversion'>[1]</a>.",
        slug: "recycling-rate",
        favourite: false,
    },
    {
        id: 6,
        name: "Percentage of Sustainable Transportation",
        description: "The San Francisco government measures the distribution of transportation methods, and classifies some (walking, taking public transit, cycling) as sustainable <a link = 'https://sfgov.org/scorecards/transportation/non-private-auto-mode-share'>[1]</a>. This indicator tracks the percentage of all such trips that take place on sustainable transportation modes. It doesn’t include any data about the length of these trips, which might play a significant role in the sustainability of the city (for example, if all long trips are taken in a car, and all short trips are on buses).",
        slug: "sustainable-transportation",
        favourite: false,
    }
]

let mentalHealthIndicators = [
    {
        id: 1,
        name: "Number of Mental Health Clients",
        description: "This indicator tracks the total number of people in treatment for mental health issues with services run through the San Francisco Department of Public Health. Totals are calculated for each month, and each individual is only counted once, regardless of the number of services that they received. This indicator uses data collected by the San Francisco government through its scorecard program <a link='https://sfgov.org/scorecards/public-health/substance-abuse-and-mental-health-treatment'>[1]</a>.",
        slug: "mental-health-clients",
        favourite: false,
    },
]

let educationIndicators = [
    {
        id: 1,
        name: "Chronic Absenteeism, Broken Down by race",
        description: "This indicator was drawn from the California School Dashboard by the San Francisco United School District <a link='https://www.caschooldashboard.org/reports/38684780000000/2019/academic-engagement'>[1]</a>, which is an excellent resource for many different measures of academic performance and behavior. Absenteeism is measured for students from kindergarten through grade 8, and being “chronically absent” involves being absent 10 percent or more of all enrolled school days. These statistics are for 2019, because data reporting stopped by government mandate during the COVID-19 pandemic.",
        slug: "student-absenteeism-race",
        favourite: false,
    },
    {
        id: 2,
        name: "Graduation Rate, Broken Down by Race",
        description: "This indicator was taken from the California School Dashboard by the San Francisco United School District <a link='https://www.caschooldashboard.org/reports/38684780000000/2019/academic-engagement'>[1]</a>. High school students are counted as ‘graduated’ when they receive a standard high school diploma, or when they complete their requirements at an alternative school. These statistics are for 2019, because data reporting stopped by government mandate during the COVID-19 pandemic.",
        slug: "high-school-graduation-race",
        favourite: false,
    }
]












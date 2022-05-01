import React from 'react'

const MENU_OPTIONS: MenuOption[] = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About Us",
        url: "/about-us",
        subItems: [
            {
                name: "Our Family",
                url: "/about-us/our-family",
                subItems: [
                    {
                        name: "Benjamin Hodder",
                        url: "/about-us/our-family/benjamin-hodder"
                    },
                    {
                        name: "Philip R. McDavid",
                        url: "/about-us/our-family/philip-r-mcdavid"
                    }
                ]
            },
            {
                name: "Our Story",
                url: "/about-us/our-story"
            },
            {
                name: "Who Are We?",
                url: "/about-us/who-are-we"
            }
        ]
    },
    {
        name: "Services",
        url: "/services",
        subItems: [
            {
                name: "Floral Design and Artistry",
                url: "/services/floral-design",
                subItems: [
                    {
                        name: "Artistry, Booths, and Competitions",
                        url: "/services/floral-design/artistry-booths-competitions",
                        subItems: [
                            {
                                name: "Capital District Flower and Garden Show",
                                url: "/services/floral-design/artistry-booths-competitions/capital-district"
                            },
                            {
                                name: "Cathedral in Bloom",
                                url: "/services/floral-design/artistry-booths-competitions/cathedral-in-bloom"
                            }
                        ]
                    },
                    {
                        name: "Client Pieces",
                        url: "/services/floral-design/client-pieces",
                        subItems: [
                            {
                                name: "Anniversary",
                                url: "/services/floral-design/client-pieces/anniversary"
                            },
                            {
                                name: "Birthday",
                                url: "/services/floral-design/client-pieces/birthday"
                            },
                            {
                                name: "Congratulations",
                                url: "/services/floral-design/client-pieces/congratulations"
                            },
                            {
                                name: "Events",
                                url: "/services/floral-design/client-pieces/events",
                                subItems: [
                                    {
                                        name: "Prom",
                                        url: "/services/floral-design/client-pieces/prom"
                                    },
                                    {
                                        name: "Everyday",
                                        url: "/services/floral-design/client-pieces/everyday"
                                    },
                                    {
                                        name: "Funeral",
                                        url: "/services/floral-design/client-pieces/funeral"
                                    },
                                    {
                                        name: "Get Well",
                                        url: "/services/floral-design/client-pieces/get-well"
                                    },
                                    {
                                        name: "New Baby",
                                        url: "/services/floral-design/client-pieces/new-baby"
                                    },
                                    {
                                        name: "Just Because",
                                        url: "/services/floral-design/client-pieces/just-because"
                                    },
                                    {
                                        name: "Parties and Celebrations",
                                        url: "/services/floral-design/client-pieces/parties-and-celebrations"
                                    },
                                    {
                                        name: "Symurly",
                                        url: "/services/floral-design/client-pieces/symurly"
                                    },
                                    {
                                        name: "Thank You",
                                        url: "/services/floral-design/client-pieces/thank-you"
                                    }
                                ]
                            },
                            {
                                name: "Wedding",
                                url: "/services/floral-design/client-pieces/wedding"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Photography",
                url: "/services/photography",
                subItems: [
                    {
                        name: "Animals",
                        url: "/services/photography/animals",
                        subItems: [
                            {
                                name: "Zoos",
                                url: "/services/photography/animals/zoos",
                                subItems: [
                                    {
                                        name: "Cleveland Metroparks Zoo",
                                        url: "/services/photography/animals/zoos/cleveland-metroparks-zoo"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Events",
                        url: "/services/photography/events"
                    },
                    {
                        name: "Fitness",
                        url: "/services/photography/fitness",
                        subItems: [
                            {
                                name: "Caprara Fitness",
                                url: "/services/photography/fitness/caprara-fitness"
                            }
                        ]
                    },
                    {
                        name: "Mechanical",
                        url: "/services/photography/mechanical",
                        subItems: [
                            {
                                name: "Cars",
                                url: "/services/photography/mechanical/cars"
                            },
                            {
                                name: "Engines",
                                url: "/services/photography/mechanical/engines"
                            }
                        ]
                    },
                    {
                        name: "Nature",
                        url: "/services/photography/nature",
                        subItems: [
                            {
                                name: "Flowers",
                                url: "/services/photography/nature/flowers",
                                subItems: [
                                    {
                                        name: "Orchids",
                                        url: "/services/photography/nature/flowers/orchids"
                                    },
                                    {
                                        name: "Other",
                                        url: "/services/photography/nature/flowers/other"
                                    },
                                    {
                                        name: "Gardens",
                                        url: "/services/photography/nature/flowers/gardens",
                                        subItems: [
                                            {
                                                name: "Hannaford Memorial Garden",
                                                url: "/services/photography/nature/flowers/gardens/hannaford-memorial-garden"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "People",
                        url: "/services/photography/people",
                        subItems: [
                            {
                                name: "Family Photos",
                                url: "/services/photography/people/family-photos"
                            },
                            {
                                name: "Headshots",
                                url: "/services/photography/people/headshots"
                            }
                        ]
                    },
                    {
                        name: "Performances",
                        url: "/services/photography/performances",
                        subItems: [
                            {
                                name: "Park Playhouse Theatre",
                                url: "/services/photography/performances/park-playhouse-theatre",
                                subItems: [
                                    {
                                        name: "The Music Man",
                                        url: "/services/photography/performances/park-playhouse-theatre/the-music-man"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Travel",
                        url: "/services/photography/travel",
                        subItems: [
                            {
                                name: "New York",
                                url: "/services/photography/travel/new-york"
                            },
                            {
                                name: "Ohio",
                                url: "/services/photography/travel/ohio"
                            },
                            {
                                name: "Vermont",
                                url: "/services/photography/travel/vermont"
                            }
                        ]
                    },
                    {
                        name: 'Weddings',
                        url: '/services/photography/weddings'
                    }
                ]
            },
            {
                name: "Videography",
                url: "/services/videography",
                subItems: [
                    {
                        name: "Advertisements",
                        url: "/services/videography/advertisements"
                    },
                    {
                        name: "Booths, Competitions, and Shows",
                        url: "/services/videography/booths-competitions-and-shows",
                        subItems: [
                            {
                                name: "Capital District Flower and Garden Show",
                                url: "/services/videography/booths-competitions-and-shows/capital-district-flower-and-garden-show"
                            }
                        ]
                    },
                    {
                        name: "Client Pieces",
                        url: "/services/videography/client-pieces",
                        subItems: [
                            {
                                name: "People of Youtube",
                                url: "/services/videography/client-pieces/people-of-youtube"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Contact Us",
        url: "/contact-us"
    }
]

export type MenuItem = {
    name: string;
    url: string;
    id: string;
    depth: number;
    subItems?: MenuItem[];
};

type MenuOption = {
    name: string;
    url: string;
    subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
    return options.map((option, idx) => ({
        ...option,
        id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
        depth,
        subItems:
            option.subItems && option.subItems.length > 0
                ? makeMenuLevel(option.subItems, depth + 1)
                : undefined,
    }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS)

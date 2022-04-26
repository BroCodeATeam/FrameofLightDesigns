const routes = [
    {
        id: 1,
        label: "Home",
        path: "/"
    },
    {
        id: 2,
        label: "About Us",
        path: "/about-us",
        subMenu: [
            {
                id: 1,
                label: "Our Family",
                path: "/about-us/our-family",
                subMenu: [
                    {
                        id: 1,
                        label: "Benjamin Hodder",
                        path: "/about-us/our-family/benjamin-hodder"
                    },
                    {
                        id: 2,
                        label: "Philip R. McDavid",
                        path: "/about-us/our-family/philip-r-mcdavid"
                    }
                ]
            },
            {
                id: 2,
                label: "Our Story",
                path: "/about-us/our-story"
            },
            {
                id: 3,
                label: "Who Are We?",
                path: "/about-us/who-are-we"
            }
        ]
    },
    {
        id: 3,
        label: "Services",
        "links": "/services",
        subMenu: [
            {
                id: 1,
                label: "Floral Design and Artistry",
                path: "/services/floral-design",
                subMenu: [
                    {
                        id: 1,
                        label: "Artistry, Booths, and Competitions",
                        path: "/services/floral-design/artistry-booths-competitions",
                        subMenu: [
                            {
                                id: 1,
                                label: "Capital District Flower and Garden Show",
                                path: "/services/floral-design/artistry-booths-competitions/capital-district"
                            },
                            {
                                id: 2,
                                label: "Cathedral in Bloom",
                                path: "/services/floral-design/artistry-booths-competitions/cathedral-in-bloom"
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: "Client Pieces",
                        path: "/services/floral-design/client-pieces",
                        subMenu: [
                            {
                                id: 1,
                                label: "Anniversary",
                                path: "/services/floral-design/client-pieces/anniversary"
                            },
                            {
                                id: 2,
                                label: "Birthday",
                                path: "/services/floral-design/client-pieces/birthday"
                            },
                            {
                                id: 3,
                                label: "Congratulations",
                                path: "/services/floral-design/client-pieces/congratulations"
                            },
                            {
                                id: 4,
                                label: "Events",
                                path: "/services/floral-design/client-pieces/events",
                                subMenu: [
                                    {
                                        id: 1,
                                        label: "Prom",
                                        path: "/services/floral-design/client-pieces/prom"
                                    },
                                    {
                                        id: 2,
                                        label: "Everyday",
                                        path: "/services/floral-design/client-pieces/everyday"
                                    },
                                    {
                                        id: 3,
                                        label: "Funeral",
                                        path: "/services/floral-design/client-pieces/funeral"
                                    },
                                    {
                                        id: 4,
                                        label: "Get Well",
                                        path: "/services/floral-design/client-pieces/get-well"
                                    },
                                    {
                                        id: 5,
                                        label: "New Baby",
                                        path: "/services/floral-design/client-pieces/new-baby"
                                    },
                                    {
                                        id: 6,
                                        label: "Just Because",
                                        path: "/services/floral-design/client-pieces/just-because"
                                    },
                                    {
                                        id: 7,
                                        label: "Parties and Celebrations",
                                        path: "/services/floral-design/client-pieces/parties-and-celebrations"
                                    },
                                    {
                                        id: 8,
                                        label: "Sympathy",
                                        path: "/services/floral-design/client-pieces/sympathy"
                                    },
                                    {
                                        id: 9,
                                        label: "Thank You",
                                        path: "/services/floral-design/client-pieces/thank-you"
                                    }
                                ]
                            },
                            {
                                id: 5,
                                label: "Wedding",
                                path: "/services/floral-design/client-pieces/wedding"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                label: "Photography",
                path: "/services/photography",
                subMenu: [
                    {
                        id: 1,
                        label: "Animals",
                        path: "/services/photography/animals",
                        subMenu: [
                            {
                                id: 1,
                                label: "Zoos",
                                path: "/services/photography/animals/zoos",
                                subMenu: [
                                    {
                                        id: 1,
                                        label: "Cleveland Metroparks Zoo",
                                        path: "/services/photography/animals/zoos/cleveland-metroparks-zoo"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: "Events",
                        path: "/services/photography/events"
                    },
                    {
                        id: 3,
                        label: "Fitness",
                        path: "/services/photography/fitness",
                        subMenu: [
                            {
                                id: 1,
                                label: "Caprara Fitness",
                                path: "/services/photography/fitness/caprara-fitness"
                            }
                        ]
                    },
                    {
                        id: 4,
                        label: "Mechanical",
                        path: "/services/photography/mechanical",
                        subMenu: [
                            {
                                id: 1,
                                label: "Cars",
                                path: "/services/photography/mechanical/cars"
                            },
                            {
                                id: 2,
                                label: "Engines",
                                path: "/services/photography/mechanical/engines"
                            }
                        ]
                    },
                    {
                        id: 5,
                        label: "Nature",
                        path: "/services/photography/nature",
                        subMenu: [
                            {
                                id: 1,
                                label: "Flowers",
                                path: "/services/photography/nature/flowers",
                                subMenu: [
                                    {
                                        id: 1,
                                        label: "Orchids",
                                        path: "/services/photography/nature/flowers/orchids"
                                    },
                                    {
                                        id: 2,
                                        label: "Other",
                                        path: "/services/photography/nature/flowers/other"
                                    },
                                    {
                                        id: 3,
                                        label: "Gardens",
                                        path: "/services/photography/nature/flowers/gardens",
                                        subMenu: [
                                            {
                                                id: 1,
                                                label: "Hannaford Memorial Garden",
                                                path: "/services/photography/nature/flowers/gardens/hannaford-memorial-garden"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 6,
                        label: "People",
                        path: "/services/photography/people",
                        subMenu: [
                            {
                                id: 1,
                                label: "Family Photos",
                                path: "/services/photography/people/family-photos"
                            },
                            {
                                id: 2,
                                label: "Headshots",
                                path: "/services/photography/people/headshots"
                            }
                        ]
                    },
                    {
                        id: 7,
                        label: "Performances",
                        path: "/services/photography/performances",
                        subMenu: [
                            {
                                id: 1,
                                label: "Park Playhouse Theatre",
                                path: "/services/photography/performances/park-playhouse-theatre",
                                subMenu: [
                                    {
                                        id: 1,
                                        label: "The Music Man",
                                        path: "/services/photography/performances/park-playhouse-theatre/the-music-man"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 8,
                        label: "Travel",
                        path: "/services/photography/travel",
                        subMenu: [
                            {
                                id: 1,
                                label: "New York",
                                path: "/services/photography/travel/new-york"
                            },
                            {
                                id: 2,
                                label: "Ohio",
                                path: "/services/photography/travel/ohio"
                            },
                            {
                                id: 3,
                                label: "Vermont",
                                path: "/services/photography/travel/vermont"
                            }
                        ]
                    },
                    {
                        id: 9,
                        label: 'Weddings',
                        path: '/services/photography/weddings'
                    }
                ]
            },
            {
                id: 3,
                label: "Videography",
                path: "/services/videography",
                subMenu: [
                    {
                        id: 1,
                        label: "Advertisements",
                        path: "/services/videography/advertisements"
                    },
                    {
                        id: 2,
                        label: "Booths, Competitions, and Shows",
                        path: "/services/videography/booths-competitions-and-shows",
                        subMenu: [
                            {
                                id: 1,
                                label: "Capital District Flower and Garden Show",
                                path: "/services/videography/booths-competitions-and-shows/capital-district-flower-and-garden-show"
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: "Client Pieces",
                        path: "/services/videography/client-pieces",
                        subMenu: [
                            {
                                id: 1,
                                label: "People of Youtube",
                                path: "/services/videography/client-pieces/people-of-youtube"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        label: "Contact Us",
        path: "/contact-us"
    }
]

export default routes
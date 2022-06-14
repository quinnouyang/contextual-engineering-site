type Data = Topic[];
interface Topic {
    topic: string,
    details: string[],
}

export const DATA: Data = [
    {
        topic: 'We strive to deliver relevant engineering expertise using appropriate technology and place-based design.',
        details: [
            'We explore and are attuned to engineering applied internationally.',
        ],
    },
    {
        topic: 'Our efforts place heavy emphasis on rural communities.',
        details: [
            'Rural communites have become threatened by a global trend toward urban migration.',
            'The loss of farming communities in many societies can imperil the food security of nations without resources to import supplies from others.',
            'We believe that rural access to basic needs like water, electricity and roads will increase migration back to the breadbaskets of alternately developed countries',
            'supporting self-sufficiency and improved physical mobility of all citizens dependent upon local foodstuffs.'
        ],
    },
    {
        topic: 'We assert that engineering is an objective',
        details: [
            'Focus on the unique responsibilites and challenges of technical design',
            'ignore by characterizations of engineering as social development processes.'
        ],
    },
    {
        topic: ' Join us in our effort to redefine engineering’s role in international infrastructure implementation and better equip our international engineers for work with societies that differ from their own!',
        details: [],
    }
];
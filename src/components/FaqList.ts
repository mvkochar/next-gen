type TFaq = {
    id: number
    question: string
    answer: string
}

const FaqList: TFaq[] = [
    {
        id: 1,
        question: 'How long does it take to complete a web development project?',
        answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },

    {
        id: 2,
        question: 'Can you handle large-scale mobile app development projects?',
        answer: "Mauris suscipit libero quis nisi varius facilisis. Morbi vestibulum urna at elit consectetur blandit. Mauris ipsum ipsum, volutpat sed orci quis, consequat tincidunt ipsum. Quisque aliquet libero a ante pulvinar, posuere dictum risus porttitor. Aenean nec arcu egestas leo bibendum fringilla. Nunc ornare augue at elit tempor eleifend. Proin varius massa ultrices, tempor felis et, mattis risus. Sed non nisl dapibus lorem accumsan congue sed quis nulla."
    },

    {
        id: 3,
        question: 'Can you integrate third-party APIs into our mobile app?',
        answer: "Praesent suscipit dignissim arcu eget aliquam. Sed euismod, felis eu elementum imperdiet, mauris sapien vulputate odio, quis pulvinar odio mauris quis quam. Curabitur at eros quis enim eleifend tincidunt. Aliquam erat volutpat. Vivamus nec laoreet quam, in dignissim risus. Integer urna purus, porttitor a bibendum vel, fringilla vitae ligula. Quisque consectetur felis quam, at tincidunt est egestas at. Fusce porta, elit eget ornare mattis, nulla risus finibus nulla, a tincidunt felis urna non libero."
    },

    {
        id: 4,
        question: 'How do you ensure cross-platform compatibility for mobile apps?',
        answer: "Duis et elit tellus. Nulla eget blandit urna, eu commodo tortor. Etiam eu vulputate quam, tristique scelerisque turpis. Curabitur elementum lacus eros, volutpat dapibus ipsum consequat quis. Fusce et diam hendrerit, bibendum tortor sed, laoreet tellus. Fusce ullamcorper massa sapien, ut finibus libero consequat non. Nullam vehicula ex odio, in pretium nisl tempus in. Morbi sed placerat justo. Praesent vitae lobortis tortor, a tempus ipsum."
    },

    {
        id: 5,
        question: 'What is your approach to user experience (UX) design?',
        answer: "Integer at tempus leo. Aliquam neque tortor, maximus a libero eu, egestas suscipit tellus. Curabitur tempor auctor libero ut euismod. Sed pulvinar pellentesque suscipit. Cras vitae risus id diam dapibus bibendum a a nulla. Proin vitae posuere justo. Quisque eleifend diam cursus enim dignissim tempus. Maecenas non nisl vel elit gravida suscipit. Maecenas consequat lacus at fermentum sollicitudin. Maecenas vitae ultrices risus, ac convallis nunc. Morbi sagittis justo arcu, nec gravida enim blandit et. In vitae purus malesuada, sagittis turpis at, maximus turpis. Pellentesque ut bibendum est. Donec vulputate risus non mi porttitor, vel fermentum magna bibendum. Praesent eu nibh est. Ut egestas tortor ac dolor venenatis, a lobortis ligula pharetra."
    }
]

export default FaqList
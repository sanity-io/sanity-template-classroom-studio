import { GiTeacher } from 'react-icons/gi'
 
export default {
    name: 'classroom',
    title: 'Classrooms',
    type: 'document',
    icon: GiTeacher,
    fieldsets: [
        {
            name: 'peopleInClass', 
            title: 'All the different people in class',
            options: {
                collapsible: true
            }
        }
    ],
    preview: {
        select: {
            title: 'title',
            roster: 'roster'
        },
        prepare(selection) {
            const { title, roster } = selection;

            return {
                title: title,
                subtitle: `Students registered: ${roster.length}`
            }
        }
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'dates',
            title: 'Start and End date',
            type: 'object',
            options: {
                collapsible: true
            },
            fields: [              
                {
                    title: 'Start Date',
                    name: 'startDate',
                    type: 'date',
                    options: {
                        dateFormat: 'YYYY-MM-DD',
                        calendarTodayLabel: 'today',
                    },
                },
                {
                    title: 'End Date',
                    name: 'endDate',
                    type: 'date',
                    options: {
                        dateFormat: 'YYYY-MM-DD',
                        calendarTodayLabel: 'today',
                    },
                },   
            ],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5
        },
        {
            title: 'Syllabus',
            name: 'syllabus',
            type: 'reference',
            weak: false,
            to: [
                {type: 'syllabus'},
            ],
            description: 'Which syllabus is for this course?'
        },
        {
            title: 'Roster',
            name: 'roster',
            type: 'array',
            fieldset: 'peopleInClass',
            of: [
                {
                    title: 'Student',
                    name: 'person',
                    type: 'reference',
                    weak: false,
                    to: [
                        {type: 'person'},
                    ],
                },
                
            ],
        },  
        {
            name: 'staff',
            title: 'Staff',
            type: 'array',
            fieldset: 'peopleInClass',
            of: [
                {
                    name: 'staffMember',
                    title: 'Staff Member',
                    type: 'object',
                    fields: [
                        {
                            name: 'type',
                            title: 'Staff Type',
                            type: 'string',
                            options: {
                                list: [
                                    { value: 'Instructor', title: 'Main Instructor' },
                                    { value: 'TA', title: 'TA'}
                                ]
                            }
                            
                        },
                        {
                            title: 'Staff Member',
                            name: 'person',
                            type: 'reference',
                            weak: false,
                            to: [
                                {type: 'person'},
                            ],
                        },

                    ],
                    preview: {
                        select: {
                            name: 'person.name',
                            title: 'type'    
                        },
                        prepare(selection) {
                            const {name, title} = selection
                            return {
                                title: `${title}: ${name} `
                            }
                        }
                    }
                }
            ]
        }
    ]
}
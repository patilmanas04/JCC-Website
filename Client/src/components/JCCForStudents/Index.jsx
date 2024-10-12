import React from 'react'
import { JCCForStudentsWrapper, JCCForStudentsContent, JCCForStudentsTitle, JCCForStudentsDescription, Span } from './JCCForStudentsElements'

const JCCForStudents = () => {
    return (
        <JCCForStudentsWrapper>
            <JCCForStudentsContent>
                <JCCForStudentsTitle>Why <Span>JCC</Span> for School Students?</JCCForStudentsTitle>
                <JCCForStudentsDescription>
                    Choosing the correct career not only pays you monetarily, but also provides the necessary professional development. So, as students, we are all quite cognizant of the career that we will pursue. However, many students, including myself, are unable to make the right career decision without proper coaching. JCC is an excellent career counselling assistance organization that will assist you in selecting the proper career as career possibilities continue to expand and change in value as technology advances.
                </JCCForStudentsDescription>
            </JCCForStudentsContent>
        </JCCForStudentsWrapper>
    )
}

export default JCCForStudents
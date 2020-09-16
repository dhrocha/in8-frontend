import styled from 'styled-components'

const SectionMenu = styled.div`
  height: 30%;
  clear: both;
  padding: 50px;
`

const Section = styled.div`
  width: 60%;
  height: 30%;
  color: #fff;
  margin: 0 auto;
  position: relative;
  padding: 50px;

  @media (max-width: 768px) {
    width: 80%;
    padding: 5px;
  }
`

export { Section, SectionMenu }

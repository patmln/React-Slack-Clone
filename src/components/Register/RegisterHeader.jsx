import { 
    PageHeader,
    LogoContainer
 } from './style'
function RegisterHeader (){
    return(
        <PageHeader>
            <LogoContainer>
                <img alt="Slack" src="http://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="40" title="Slack"/>
            </LogoContainer>
        </PageHeader>
    )
}

export default RegisterHeader
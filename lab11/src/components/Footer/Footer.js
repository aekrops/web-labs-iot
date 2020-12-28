import React from 'react';
import {
    FooterContainer,
    FooterIcons,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    FooterContent,
    FooterText
} from './Footer.styled';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterIcons>
                    <LinkedinIcon size="35px" />
                    <TwitterIcon size="35px" />
                    <FacebookIcon size="35px" />
                </FooterIcons>
                <FooterText>
                     Anteico Inc. All Rights Reserved 2020
                </FooterText>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
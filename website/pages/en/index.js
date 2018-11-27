/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('intro.html', language)}>Get Started</Button>
            <Button href='https://netlify.com/enterprise' target='_blank'>Contact Netlify</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const LittleFeatureBlock = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <LittleFeatureBlock layout="fourColumn">
    {[
      {
        content: 'This site is served directly from Netlify’s CDN. No servers necessary.',
        image: imgUrl('feature-cdn.svg'),
        imageAlign: 'top',
        title: 'CDN',
      },
      {
        content: 'Publishing a page is as easy as editing a text file and pushing a Git commit.',
        image: imgUrl('feature-continuous-deployment.svg'),
        imageAlign: 'top',
        title: 'Continous Deployment',
      },
      {
        content: 'Deployable branches make it trivial to maintain multiple versions of your docs.',
        image: imgUrl('feature-branch-builds.svg'),
        imageAlign: 'top',
        title: 'Branch Builds',
      },
      {
        content: 'Adding new developers is a breeze thanks to Git-based deployment.',
        image: imgUrl('feature-collaboration.svg'),
        imageAlign: 'top',
        title: 'Built-In Collaboration',
      },
    ]}
  </LittleFeatureBlock>
);



const BigFeatureBlock = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);


const InfrastructureManagament = () => (
  <BigFeatureBlock background="light">
    {[
      {
        content: 'Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News.',
        image: imgUrl('big-feature-infrastructure-management.svg'),
        imageAlign: 'right',
        title: 'Infrastructure Management',
      },
    ]}
  </BigFeatureBlock>
);


const AtomicDeploys = () => (
  <BigFeatureBlock>
    {[
      {
       content: "Instead of deploying to individual servers, Netlify serves static content (like this Docusaurus site) directly from a global content delivery network. It also ensures that deploys are atomic, which means you never need to worry about cache invalidation or getting into trouble after a failed deployment.",
        image: imgUrl('big-feature-atomic-deploys.svg'),
        imageAlign: 'left',
        title: 'Atomic Deploys to a CDN',
      },
    ]}
  </BigFeatureBlock>
);


const ContinuousDeployment = () => (
  <BigFeatureBlock background="light">
    {[
      {
        content: 'Netlify listens for changes to your Git repository and automatically deploys changes every time you push to your production (`master`) branch. Any developer with access to underlying Git repo can update this site on their own.',
        image: imgUrl('big-feature-continuous-deployment.svg'),
        imageAlign: 'right',
        title: 'Continuous Deployment',
      },
    ]}
  </BigFeatureBlock>
);


const CustomizableBuilds = () => (
  <BigFeatureBlock>
    {[
      {
       content: "Whenever you push a commit, Netlify runs a build command to generate the final version of your website. The command for this Docusaurus project is simply `npm run build`, but you can change it to anything you want. This means Netlify works with virtually any developer documentation engine (e.g., <a href='https://vuepress.vuejs.org/' target='_blank'>VuePress</a>), as well as more general purpose static site generators like <a href='https://jekyllrb.com/' target='_blank'>Jekyll</a> and <a href='https://www.gatsbyjs.org/' target='_blank'>Gatsby</a>.",
        image: imgUrl('big-feature-customizable-builds.svg'),
        imageAlign: 'left',
        title: 'Customizable Builds',
      },
    ]}
  </BigFeatureBlock>
);



const AuditLogs = () => (
  <BigFeatureBlock background='light'>
    {[
      {
       content: "Since deploys are tied directly to Git commits, you always know exactly what has been deployed and who deployed it. Viewing your deployment history is as easy as git log, and rolling back is a simple <code>git revert &lt;commit&gt; && git push master</code>. In addition, Netlify also keeps a full audit log of actions made by your team.",
        image: imgUrl('big-feature-audit-log.svg'),
        imageAlign: 'right',
        title: 'Audit Logs',
      },
    ]}
  </BigFeatureBlock>
);



const SeamlessCollaboration = () => (
  <BigFeatureBlock>
    {[
      {
       content: "Netlify creates a seamless collaboration experience for developers. You can update documentation using the same pull request workflow that you use everyday for the rest of your code bases. No extra tools to learn, and no new access control lists to worry about when onboarding or offboarding an employee.",
        image: imgUrl('big-feature-seamless-collaboration.svg'),
        imageAlign: 'left',
        title: 'Seamless Collaboration',
      },
    ]}
  </BigFeatureBlock>
);





const NextSteps = () => (
  <LittleFeatureBlock layout="fourColumn" background='light'>
    {[
      {
        content: "Try editing this site and experience how easy it is to manage a documentation site on Netlify. <a href='/docs/intro' class='button button--top-margin button--block button--fixed-width'>Get Started</a>",
        image: imgUrl('next-steps-docs.svg'),
        imageAlign: 'top',
        title: 'Read the Docs'
      },
      {
        content: "Want to generate another website with CI/CD and fully managed infrastructure? Head back to the generator. <a href='https://friendly-raman-c1a68c.netlify.com/' class='button button--top-margin button--block button--fixed-width' target='_blank'>Generate Another Site</a>",
        image: imgUrl('next-steps-survey.svg'),
        imageAlign: 'top',
        title: 'Back to the Survey'
      },
      {
        content: "The Netlify team would be more than happy to help you with any questions or concerns. <a href='https://www.netlify.com/enterprise/' class='button button--top-margin button--block button--fixed-width' target='_blank'>Contact Netlify</a>",
        image: imgUrl('next-steps-contact.svg'),
        imageAlign: 'top',
        title: 'Contact Netlify'
      },
    ]}
  </LittleFeatureBlock>
);



class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <InfrastructureManagament />
          <AtomicDeploys />
          <ContinuousDeployment />
          <CustomizableBuilds />
          <AuditLogs />
          <SeamlessCollaboration />
          <NextSteps />
        </div>
      </div>
    );
  }
}

module.exports = Index;

'use client';
import React from 'react';
import {
  Layout,
  Row,
  Col,
  Input,
  Button,
  Space,
  Typography,
  Divider,
} from 'antd';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaClock,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';
import LogoIcon from '@/app/components/shared/LogoIcon';

const { Footer } = Layout;
const { Text, Title, Paragraph } = Typography;

// Link data for dynamic rendering
const companyLinks = [
  { href: '/for-samplers', text: 'For Samplers' },
  { href: '/for-business', text: 'For Business owners' },
  { href: '/about', text: 'About us' },
];

const socialLinks = [
  { href: '/', text: 'Facebook', icon: <FaFacebook /> },
  { href: '/', text: 'Instagram', icon: <FaInstagram /> },
  { href: '/', text: 'LinkedIn', icon: <FaLinkedin /> },
  { href: '/', text: 'TikTok', icon: <FaTiktok /> },
  { href: '/', text: 'Twitter', icon: <FaTwitter /> },
];

const contactInfo = [
  {
    text: 'Mon - Fri: 9am - 5pm ET',
    icon: <FaClock />,
    isLink: false,
  },
  {
    text: '800-548-6877',
    icon: <FaPhone />,
    isLink: false,
  },
  {
    text: 'help@sampli.com',
    icon: <FaEnvelope />,
    href: 'mailto:help@sampli.com',
    isLink: true,
  },
];

const footerLinks = [
  { href: '/privacy', text: 'Privacy Policy' },
  { href: '/terms', text: 'Terms of Use' },
  { href: '/cookies', text: 'Cookie Policy' },
  { href: '/affiliate', text: 'Affiliate program' },
];

const FooterSection = () => {
  const renderLinks = (links, style = {}) => (
    <Space direction="vertical" size="small">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          style={{ color: '#c7c7c7', ...style }}
        >
          {link.text}
        </Link>
      ))}
    </Space>
  );

  const renderSocialLinks = (links) => (
    <Space direction="vertical" size="small">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          style={{
            color: '#c7c7c7',
            display: 'flex',
            alignItems: 'center',
          }}
          className="hover:!text-[red]"
        >
          <span  style={{ marginRight: '8px' }}>
            {link.icon}
          </span>
          {link.text}
        </Link>
      ))}
    </Space>
  );

  const renderContactInfo = (items) => (
    <Space direction="vertical" size="small">
      {items.map((item, index) => {
        const content = (
          <>
            <span style={{ marginRight: '8px' }}>{item.icon}</span> {item.text}
          </>
        );

        return item.isLink ? (
          <Link
            key={index}
            href={item.href}
            style={{
              color: '#c7c7c7',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {content}
          </Link>
        ) : (
          <Text
            key={index}
            style={{
              color: '#c7c7c7',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {content}
          </Text>
        );
      })}
    </Space>
  );

  return (
    <Footer style={{ background: '#0d0d0d', padding: '40px 16px 20px' }}>
      <div className="area-xl">
        <div style={{ marginBottom: '32px' }}>
          <LogoIcon />
          <Paragraph className='max-w-2xl' style={{ color: '#c7c7c7', marginBottom: '24px' }}>
            Customers in Lagos, Abuja, Ibadan, Warri, Benin, Abeokuta, Akure and
            Portharcourt enjoy free delivery on items with the free delivery
            tag. Free delivery does not apply to large items like refrigerators,
            huge TVs, washing machines and others.
          </Paragraph>
        </div>

        {/* Main Footer Content */}
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Company Info
            </Title>
            {renderLinks(companyLinks)}
          </Col>

          {/* Follow Us */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Follow Us
            </Title>
            {renderSocialLinks(socialLinks)}
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Contact Info
            </Title>
            {renderContactInfo(contactInfo)}
          </Col>

          {/* Subscribe & Save */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Subscribe & Save
            </Title>
            <Text
              style={{
                color: '#c7c7c7',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Join our email list and be the first to know about new limited
              edition products, material innovations, and lots of other fun
              updates.
            </Text>
            <Input.Group compact style={{ display: 'flex' }}>
              <Input
                placeholder="Your email address"
                style={{ flex: 1, borderRight: 0 }}
              />
              <Button type="primary" style={{ backgroundColor: '#1677ff' }}>
                Sign Up
              </Button>
            </Input.Group>
          </Col>
        </Row>

        <Divider style={{ borderColor: '#333', margin: '32px 0 24px' }} />

        {/* Footer Bottom */}
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={16}>
            <Space
              split={
                <Divider type="vertical" style={{ borderColor: '#333' }} />
              }
            >
              {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} style={{ color: '#c7c7c7' }}>
                  {link.text}
                </Link>
              ))}
            </Space>
          </Col>
          <Col
            xs={24}
            sm={8}
            style={{ textAlign: { xs: 'left', sm: 'right' } }}
          >
            <Text style={{ color: '#c7c7c7' }}>
              © {new Date().getFullYear()} Sampli. All Rights Reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterSection;

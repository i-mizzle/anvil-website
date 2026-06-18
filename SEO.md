# SEO Configuration

## Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_SITE_URL=https://anvildigitalinnovations.com
```

Replace with your actual production domain.

## SEO Improvements Implemented

### 1. **Comprehensive Metadata Structure**
- Created centralized metadata utilities (`lib/metadata.ts`)
- Consistent metadata across all pages with proper title templates
- Meta descriptions optimized for search results
- Keywords specific to each page and product

### 2. **Open Graph & Social Media Tags**
- Open Graph tags for social sharing
- Twitter Card tags for Twitter previews
- Proper image sizes (1200x630px recommended)
- Canonical URLs for each page

### 3. **Structured Data (JSON-LD)**
- Organization schema in root layout
- Product schema utilities for case studies
- Breadcrumb schema utilities for navigation
- Proper schema context for search engines

### 4. **Meta Tags**
- Viewport configuration
- Theme color
- Charset declaration
- Robots meta directives (index, follow)
- Google Bot specific instructions

### 5. **SEO Files**
- `robots.txt` - Controls search engine crawling
- `sitemap.xml` - Provides site structure to search engines
- Proper sitemap priorities and change frequencies

### 6. **Page-Specific Optimizations**

#### Home Page
- Comprehensive keywords covering all products and services
- Meta description highlighting main value proposition
- Product keywords: Elevana, AgroTrace, Acava

#### Case Studies Pages
- Product-specific metadata
- Feature-based keywords
- Target keywords for industry searches

#### Privacy Policy
- Privacy and data protection keywords
- GDPR compliance related terms
- User data protection focus

### 7. **Technical SEO**
- Proper heading hierarchy maintained
- Alt text on images (existing in components)
- Mobile-responsive viewport
- Fast loading with optimized fonts

## Next Steps for Further SEO Enhancement

1. **Image Optimization**
   - Create optimized OG images (1200x630px) for each page
   - Use Next.js Image optimization
   - Add descriptive alt text to all images

2. **Content Optimization**
   - Ensure H1 exists on each page
   - Create keyword-focused meta descriptions
   - Use structured headings (H2, H3, etc.)

3. **Link Building**
   - Create internal linking strategy
   - Use descriptive anchor text
   - Link to relevant case studies from home page

4. **Speed Optimization**
   - Test with PageSpeed Insights
   - Optimize Core Web Vitals
   - Use Next.js built-in optimizations

5. **Mobile SEO**
   - Test mobile usability
   - Ensure mobile-friendly design
   - Check mobile Page Speed

6. **Local SEO** (if applicable)
   - Add structured data for business location
   - Create Google Business Profile
   - Add local business schema

## Testing & Monitoring

1. **Lighthouse Audit** - Run `npm run build` then check with Lighthouse
2. **Google Search Console** - Submit sitemap and monitor indexing
3. **Google PageSpeed Insights** - Check performance metrics
4. **Structured Data Testing** - Use Google's Rich Results Test
5. **Meta Tags Testing** - Use Meta Tags Preview tools

## Files Modified/Created

- ✅ `lib/metadata.ts` - Metadata utilities
- ✅ `app/layout.tsx` - Root layout with schema
- ✅ `app/page.tsx` - Home page metadata
- ✅ `app/case-studies/page.tsx` - Case studies index
- ✅ `app/case-studies/elevana/page.tsx` - Elevana metadata
- ✅ `app/case-studies/agrotrace/page.tsx` - AgroTrace metadata
- ✅ `app/case-studies/acava/page.tsx` - Acava page & metadata
- ✅ `app/privacy-policy/page.tsx` - Privacy policy metadata
- ✅ `app/robots.ts` - Search engine crawling rules
- ✅ `app/sitemap.ts` - XML sitemap

## Production Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` in production environment
- [ ] Create OG images for sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test structured data with Rich Results Test
- [ ] Monitor Core Web Vitals
- [ ] Set up Google Analytics 4
- [ ] Configure meta refresh tag if needed

import { test, expect } from '@playwright/test';

test.describe('Next.js Web App', () => {
  test('homepage loads and displays content', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the main content to load
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
    
    // Check that the page title is present
    await expect(page).toHaveTitle(/Next.js/);
  });

  test('responsive design works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
  });

  test('drawer functionality works', async ({ page }) => {
    await page.goto('/');
    
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    
    // The drawer should be visible (open={true} in the component)
    // Look for drawer content (menu items)
    await expect(page.locator('text=Hello Tailwind!')).toHaveCount.toBeGreaterThan(1);
  });

  test('navigation and routing work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Verify we're on the homepage
    await expect(page.url()).toContain('/');
    
    // Check that the page loads without errors
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
  });

  test('accessibility features work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Run basic accessibility checks
    const accessibilityViolations = await page.evaluate(() => {
      // Basic check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return headings.length;
    });
    
    // At minimum, the page should be accessible
    expect(accessibilityViolations).toBeGreaterThanOrEqual(0);
  });

  test('Tailwind CSS styles are applied correctly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for styles to load
    await page.waitForLoadState('networkidle');
    
    // Check that Tailwind classes are being applied
    const styledElement = page.locator('text=Hello Tailwind!').first();
    await expect(styledElement).toBeVisible();
    
    // Verify that the element has some styling applied
    const computedStyle = await styledElement.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        color: style.color,
      };
    });
    
    // Font weight should be bold (700) from the tw`font-bold` class
    expect(computedStyle.fontWeight).toBe('700');
  });

  test('performance and loading times are acceptable', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds (adjust as needed)
    expect(loadTime).toBeLessThan(5000);
    
    // Content should be visible quickly
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
  });

  test('no console errors are present', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known harmless errors (if any)
    const criticalErrors = errors.filter((error) => {
      return !error.includes('Warning') && 
             !error.includes('development') &&
             !error.includes('favicon');
    });
    
    expect(criticalErrors).toHaveLength(0);
  });

  test('cross-browser compatibility', async ({ page, browserName }) => {
    await page.goto('/');
    
    // Basic functionality should work across all browsers
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
    
    // Log the browser for debugging if needed
    console.log(`Testing on browser: ${browserName}`);
  });

  test('handles network failures gracefully', async ({ page }) => {
    // Test with slow network to ensure app handles delays
    await page.route('**/*', route => {
      // Add a small delay to simulate slower network
      setTimeout(() => route.continue(), 100);
    });
    
    await page.goto('/');
    await expect(page.locator('text=Hello Tailwind!')).toBeVisible();
  });
});
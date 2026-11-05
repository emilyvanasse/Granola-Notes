# FN-215-A: FINANCIAL MGMT

- **Date:** Nov 5, 2026 12:30 PM EST
- **Class:** FN-215 — Financial Management
- **Granola note:** https://notes.granola.ai/d/6ceef47a-d9ca-49f4-8246-3da866237663
- **Attendees:** Emily Vanasse (note creator) <emilygvanasse@gmail.com>

## Summary

# CVS Breakup and Corporate Spin-offs

- CVS splitting into 2 separate entities after acquiring Aetna in 2018
  - Entity 1: CVS Pharmacy (9,000 retail locations)
  - Entity 2: CVS Health (Aetna insurance + Caremark pharmacy benefits)
- Spin-off rationale: focused, specialized businesses grow faster and trade at higher valuations individually
- Other examples: Johnson & Johnson (healthcare spin-off), Toshiba (electronics segments)
- Key shareholder questions before a split:
  - Share conversion ratio and equivalent value
  - Cash flow, operating costs, and margins for the past 8 years as a combined entity
  - Forecasts for each standalone business

# Bond Pricing Framework

- Three-step process (applies to all securities, including stocks):
  1. Forecast future cash flows (coupons + face value at maturity)
  2. Determine discount rate (WACC: weighted average cost of capital)
  3. Discount each cash flow to present value, then sum
- Bond cash flows:
  - Annual coupon = coupon rate × face value (e.g., 4.6% × $1,000 = $46/year)
  - Face value ($1,000) returned only at maturity
- Discount rate = WACC, reflecting the blended cost of equity and debt financing
- Result is a benchmark price, not the market price; compare to market to decide whether to buy

# Bond Types and Pricing Examples

- Discount bond: coupon rate < market rate → price < $1,000, rises toward $1,000 at maturity
- Par bond: coupon rate = market rate → price stays at $1,000
- Premium bond: coupon rate > market rate → price > $1,000, falls toward $1,000 at maturity
- Semiannual compounding adjustments (in Excel PV function):
  - Rate: market rate ÷ 2
  - N: years × 2
  - PMT: annual coupon ÷ 2
- Example: 15-year bond, 7.5% coupon, 6% market rate → premium bond, price ≈ $1,147

# Yield to Maturity, Yield to Call, and Bond Risks

- YTM: annual return if bond held to maturity; use RATE function with PV (negative), FV = $1,000, PMT = coupon, N = years to maturity
- YTC: annual return if issuer calls bond early; same RATE function but:
  - FV = $1,000 + call premium
  - N = years actually held (not full term)
- YTC example: 20-year bond issued 7 years ago, 11% coupon, called today with 7.5% call premium → YTC ≈ 11.75%
- Interest rate risk (price risk): rates rise → bond prices fall; longer maturity = higher sensitivity
  - Silicon Valley Bank failure cited as real-world example
- Reinvestment risk: rates fall → coupon payments reinvested at lower returns
- Zero coupon bonds eliminate both risks: no coupons to reinvest, price insensitive to rate changes; tradeoff is no periodic income

## Transcript

_Not available: Granola's free plan doesn't provide transcripts._

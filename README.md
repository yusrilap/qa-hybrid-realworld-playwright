## Test Strategy

This project uses a layered testing strategy:

### API Tests (`@api`)
- Validate backedn behavior
- Fast and deterministic

### Hybrid Tests (`@hybrid`)
- Api used for setup/data
- UI Used for validation
- Balanced speed and coverage

### Smoke Tests (`@smoke`)
- Critical happy paths
- Executed frequently

### Regression Tests (`@regression`)
- Validation and consistency checks
- Executed before release

## Run Commands

```bash
npm run test:api
npm run test:hybrid
npm run test:smoke
npm run test:regression 
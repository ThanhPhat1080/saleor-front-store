import { ButtonApp } from './Button';

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Test Button', async () => {
    // ARRANGE
    render(<ButtonApp />);

    // ASSERT
    expect(screen.getByTestId('cong-button'));
});

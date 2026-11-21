import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildHeroMetrics,
  computeSkillTotals,
  formatVisibleTechnologies,
  mergeProfileIdentity,
  sanitizePhoneHref,
  validateContactForm,
} from './portfolioLogic';
import { DEFAULT_IDENTITY, SKILL_DOMAINS } from '../data/portfolio';

test('validateContactForm rejects empty or invalid inputs and accepts valid submissions', () => {
  const invalid = validateContactForm({ name: 'A', email: 'not-an-email', message: 'hi' });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    message: 'Interested in collaborating on a full-stack React + FastAPI project.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('mergeProfileIdentity preserves defaults when fields are blank and applies overrides', () => {
  const merged = mergeProfileIdentity({
    name: 'Sam Taylor',
    email: 'sam.taylor@example.com',
    phone: '+1 (555) 999-1234',
    brandHandle: ' ',
  });

  assert.equal(merged.name, 'Sam Taylor');
  assert.equal(merged.email, 'sam.taylor@example.com');
  assert.equal(merged.phone, '+1 (555) 999-1234');
  assert.equal(merged.brandHandle, DEFAULT_IDENTITY.brandHandle);
});

test('sanitizePhoneHref strips spaces and formatting characters safely', () => {
  assert.equal(sanitizePhoneHref('+1 (555) 014-8920'), 'tel:+15550148920');
  assert.equal(sanitizePhoneHref(''), '#contact');
});

test('computeSkillTotals counts domains and technologies accurately', () => {
  const totals = computeSkillTotals(SKILL_DOMAINS);
  assert.equal(totals.domainCount, 7);
  assert.equal(totals.technologyCount, 40);
});

test('buildHeroMetrics reflects customized CGPA and graduation year', () => {
  const custom = mergeProfileIdentity({ cgpa: '9.50', graduationYear: '2028' });
  const metrics = buildHeroMetrics(custom);
  assert.equal(metrics[0].value, '9.50');
  assert.equal(metrics[3].value, '2028');
});

test('formatVisibleTechnologies slices list and computes overflow count', () => {
  const result = formatVisibleTechnologies(['React', 'TS', 'FastAPI', 'Postgres', 'JWT'], 3);
  assert.deepEqual(result.visible, ['React', 'TS', 'FastAPI']);
  assert.equal(result.overflowCount, 2);
});

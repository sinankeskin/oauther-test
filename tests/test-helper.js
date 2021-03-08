import * as QUnit from 'qunit';

import Application from 'oauther-test/app';
import config from 'oauther-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

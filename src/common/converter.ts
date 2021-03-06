/*
 * Copyright (c) 2018-2021 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

import { IDevWorkspace, IDevWorkspaceDevfile } from '../types';
import { devworkspaceVersion, group } from '.';

export function devfileToDevWorkspace(devfile: IDevWorkspaceDevfile): IDevWorkspace {
    devfile.metadata.annotations = {};
    const template = {
        apiVersion: `${group}/${devworkspaceVersion}`,
        kind: 'DevWorkspace',
        metadata: devfile.metadata,
        spec: {
            started: true,
            template: {}
        }
    } as IDevWorkspace;
    if (devfile.projects) {
        template.spec.template.projects = devfile.projects;
    }
    if (devfile.components) {
        template.spec.template.components = devfile.components;
    }
    if (devfile.commands) {
        template.spec.template.commands = devfile.commands;
    }
    if (devfile.events) {
        template.spec.template.events = devfile.events;
    }
    return template;
}

export function devWorkspaceToDevfile(devworkspace: IDevWorkspace): IDevWorkspaceDevfile {
    const template = {
        schemaVersion: '2.0.0',
        metadata: {
            name: devworkspace.metadata.name,
            namespace: devworkspace.metadata.namespace
        },
    } as IDevWorkspaceDevfile;
    if (devworkspace.spec.template.projects) {
        template.projects = devworkspace.spec.template.projects;
    }
    if (devworkspace.spec.template.components) {
        template.components = devworkspace.spec.template.components;
    }
    if (devworkspace.spec.template.commands) {
        template.commands = devworkspace.spec.template.commands;
    }
    if (devworkspace.spec.template.events) {
        template.events = devworkspace.spec.template.events;
    }
    return template;
}

import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './task.reducer';

export const TaskDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const taskEntity = useAppSelector(state => state.task.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="taskDetailsHeading">
          <Translate contentKey="taskdApp.task.detail.title">Task</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{taskEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="taskdApp.task.name">Name</Translate>
            </span>
          </dt>
          <dd>{taskEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="taskdApp.task.type">Type</Translate>
            </span>
          </dt>
          <dd>{taskEntity.type}</dd>
          <dt>
            <span id="category">
              <Translate contentKey="taskdApp.task.category">Category</Translate>
            </span>
          </dt>
          <dd>{taskEntity.category}</dd>
          <dt>
            <span id="remindDate">
              <Translate contentKey="taskdApp.task.remindDate">Remind Date</Translate>
            </span>
          </dt>
          <dd>{taskEntity.remindDate ? <TextFormat value={taskEntity.remindDate} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="recurringTime">
              <Translate contentKey="taskdApp.task.recurringTime">Recurring Time</Translate>
            </span>
          </dt>
          <dd>{taskEntity.recurringTime}</dd>
          <dt>
            <Translate contentKey="taskdApp.task.assignedTo">Assigned To</Translate>
          </dt>
          <dd>{taskEntity.assignedTo ? taskEntity.assignedTo.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/task" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/task/${taskEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TaskDetail;

package maggie.zipcode.taskd.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import maggie.zipcode.taskd.domain.enumeration.Category;
import maggie.zipcode.taskd.domain.enumeration.Type;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Task.class)
public abstract class Task_ {

	public static volatile SingularAttribute<Task, String> name;
	public static volatile SingularAttribute<Task, LocalDate> remindDate;
	public static volatile SingularAttribute<Task, Long> id;
	public static volatile SingularAttribute<Task, Type> type;
	public static volatile SingularAttribute<Task, Category> category;
	public static volatile SingularAttribute<Task, Integer> recurringTime;
	public static volatile SingularAttribute<Task, User> assignedTo;

	public static final String NAME = "name";
	public static final String REMIND_DATE = "remindDate";
	public static final String ID = "id";
	public static final String TYPE = "type";
	public static final String CATEGORY = "category";
	public static final String RECURRING_TIME = "recurringTime";
	public static final String ASSIGNED_TO = "assignedTo";

}


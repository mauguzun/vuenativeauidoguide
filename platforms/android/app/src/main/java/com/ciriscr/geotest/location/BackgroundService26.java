/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.ciriscr.geotest.location;

@com.tns.JavaScriptImplementation(javaScriptFile = "./bundle.js")
public class BackgroundService26 extends android.app.job.JobService implements com.tns.NativeScriptHashCodeProvider {
	public BackgroundService26(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public boolean onStartJob(android.app.job.JobParameters param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onStartJob", boolean.class, args);
	}

	public boolean onStopJob(android.app.job.JobParameters param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onStopJob", boolean.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
